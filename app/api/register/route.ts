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

  // TODO: integrate real persistence / email service:
  // - Resend / SendGrid / Postmark — send notification email to sales@
  // - HubSpot / Salesforce — push lead via API
  // - Supabase / Postgres — store registration in DB
  // - Slack webhook — notify channel #leads
  // For now, log on the server for development.
  // eslint-disable-next-line no-console
  console.info("[register] new submission", {
    receivedAt: new Date().toISOString(),
    payload: body,
  });

  return NextResponse.json({
    ok: true,
    message: "Registration received. Our team will contact you shortly.",
  });
}
