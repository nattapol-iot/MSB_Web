import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  fullName: string;
  company: string;
  email: string;
  phone?: string;
  country?: string;
  industry?: string;
  companySize?: string;
  interests?: string[];
  message?: string;
  consent: boolean;
};

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

/**
 * Forward submission to a Google Sheets-bound Apps Script web app.
 * See docs/GOOGLE_SHEETS_SETUP.md for the one-time setup.
 *
 * Required env: GOOGLE_SHEET_WEBHOOK_URL
 * Optional env: GOOGLE_SHEET_WEBHOOK_SECRET (must match Apps Script SECRET)
 */
async function persistToGoogleSheet(
  payload: Payload,
  meta: { userAgent: string; ip: string; referer: string }
): Promise<{ ok: boolean; status?: number; error?: string }> {
  const url = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!url) {
    return { ok: false, error: "GOOGLE_SHEET_WEBHOOK_URL not configured" };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
      signal: controller.signal,
      body: JSON.stringify({
        secret: process.env.GOOGLE_SHEET_WEBHOOK_SECRET ?? "",
        timestamp: new Date().toISOString(),
        ...payload,
        ...meta,
      }),
      // Apps Script returns a 302 redirect to googleusercontent — follow it
      redirect: "follow",
    });
    return { ok: res.ok, status: res.status };
  } catch (err) {
    return { ok: false, error: (err as Error).message };
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(request: Request) {
  let body: Partial<Payload>;
  try {
    body = (await request.json()) as Partial<Payload>;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid JSON body" },
      { status: 400 }
    );
  }

  // Server-side validation
  const errors: string[] = [];
  if (!body.fullName || body.fullName.trim().length < 2)
    errors.push("Full name is required");
  if (!body.company || body.company.trim().length < 2)
    errors.push("Company is required");
  if (!body.email || !isEmail(body.email))
    errors.push("Valid business email is required");
  if (!body.consent) errors.push("Consent is required");

  if (errors.length > 0) {
    return NextResponse.json(
      { ok: false, message: errors.join(". ") },
      { status: 422 }
    );
  }

  const payload = body as Payload;
  const meta = {
    userAgent: request.headers.get("user-agent") ?? "",
    ip:
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "",
    referer: request.headers.get("referer") ?? "",
  };

  // Persist to Google Sheet (best-effort: never block user response on this)
  const sheetResult = await persistToGoogleSheet(payload, meta);
  if (!sheetResult.ok) {
    // Log server-side but still acknowledge to user — sales will still receive
    // the submission via console logs / mirrored channels.
    // eslint-disable-next-line no-console
    console.error("[register] Google Sheet persistence failed", sheetResult);
  }

  // Always log the submission as a backup
  // eslint-disable-next-line no-console
  console.info("[register] new submission", {
    receivedAt: new Date().toISOString(),
    sheetOk: sheetResult.ok,
    payload,
  });

  // TODO: optional integrations
  // - Resend / SendGrid — send notification email to sales@
  // - Slack webhook — notify channel #leads

  return NextResponse.json({
    ok: true,
    message: "Registration received. Our team will contact you shortly.",
  });
}
