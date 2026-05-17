# Google Sheets Setup — Customer Registration

The `/register` form forwards every successful submission to a Google Sheet via
a tiny Google Apps Script Web App. This is **free, fast, and requires no GCP
service account**.

---

## 🎯 What you'll build

```
[/register form]  →  POST /api/register  →  POST Apps Script Web App  →  appendRow() to Google Sheet
```

You'll end up with a spreadsheet that auto-fills as new leads come in.

---

## ✅ One-time setup (≈5 minutes)

### Step 1 — Create the Google Sheet

1. Open <https://sheets.new> (creates a new sheet on your Drive).
2. Rename it, e.g. `MSB — Customer Registrations`.

### Step 2 — Open the script editor

In the sheet, go to **Extensions → Apps Script**. A new tab opens with a code
editor containing a stub `function myFunction()`.

### Step 3 — Paste the script

Replace the entire `Code.gs` contents with the snippet below. **Edit the
`SECRET` constant** to a long random string (you'll reuse this in your
Next.js env vars).

```javascript
/**
 * MSB Smart Solutions — Customer Registration receiver.
 * Bound to the parent Google Sheet via Extensions → Apps Script.
 */

const SHEET_NAME = "Registrations";
// Generate a long random string and paste it into BOTH:
//  1) this constant
//  2) GOOGLE_SHEET_WEBHOOK_SECRET in your Next.js env
// Leave empty string "" to disable the secret check (not recommended).
const SECRET = "PASTE-LONG-RANDOM-STRING-HERE";

const HEADERS = [
  "Timestamp",
  "Full Name",
  "Company",
  "Business Email",
  "Phone",
  "Country",
  "Industry",
  "Company Size",
  "Solutions of Interest",
  "Message",
  "Consent",
  "User Agent",
  "IP",
  "Referer",
];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || "{}");

    // Optional shared-secret check
    if (SECRET && data.secret !== SECRET) {
      return jsonResponse({ ok: false, error: "unauthorized" });
    }

    const sheet = ensureSheet_();
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.fullName || "",
      data.company || "",
      data.email || "",
      data.phone || "",
      data.country || "",
      data.industry || "",
      data.companySize || "",
      Array.isArray(data.interests) ? data.interests.join(", ") : "",
      data.message || "",
      data.consent ? "Yes" : "No",
      data.userAgent || "",
      data.ip || "",
      data.referer || "",
    ]);

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}

function doGet() {
  return jsonResponse({ ok: true, status: "alive" });
}

function ensureSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet
      .getRange(1, 1, 1, HEADERS.length)
      .setFontWeight("bold")
      .setBackground("#0B1B3B")
      .setFontColor("#ffffff");
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 170); // Timestamp wider
  }
  return sheet;
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
```

### Step 4 — Deploy as a Web App

1. In the Apps Script editor, click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in:
   - **Description**: `MSB Registration receiver v1`
   - **Execute as**: `Me (your@gmail.com)`
   - **Who has access**: `Anyone` ← important! (anonymous POSTs allowed)
4. Click **Deploy**.
5. Google will ask you to **authorize** the script (allow access to your sheet).
6. Copy the **Web app URL** — it looks like:
   ```
   https://script.google.com/macros/s/AKfyc.../exec
   ```

### Step 5 — Add to Next.js env vars

Create `.env.local` at the project root (gitignored):

```bash
GOOGLE_SHEET_WEBHOOK_URL="https://script.google.com/macros/s/AKfyc.../exec"
GOOGLE_SHEET_WEBHOOK_SECRET="the-same-long-random-string-from-step-3"
```

Restart `npm run dev` so Next.js picks up the new env vars.

### Step 6 — Test

1. Open `http://localhost:3000/register`.
2. Submit the form with test data.
3. Check your Google Sheet — a new row should appear within ~2 seconds.
4. Check the Next.js terminal — you should see
   `[register] new submission { sheetOk: true, ... }`.

---

## 🚀 Deploying to production

When you deploy (Vercel / Netlify / wherever), add the same two env vars in the
hosting dashboard:

| Variable | Value |
| --- | --- |
| `GOOGLE_SHEET_WEBHOOK_URL` | The `/exec` URL from step 4 |
| `GOOGLE_SHEET_WEBHOOK_SECRET` | The same secret from step 3 |

---

## 🔄 Updating the script later

If you change the Apps Script code, you must **redeploy** for changes to take
effect on the existing URL:

- **Deploy → Manage deployments → ✏️ edit the active deployment → New version → Deploy**
- The URL stays the same; you don't need to update env vars.

If you accidentally **create a new deployment** instead, the URL will change
and you'll need to update `GOOGLE_SHEET_WEBHOOK_URL` everywhere.

---

## 🛡️ Security notes

- The web app URL is *long and unguessable*, but treat it like a secret.
- The `SECRET` env var prevents random Internet drive-bys from spamming your
  sheet even if the URL leaks.
- Apps Script Web Apps allow up to ~20,000 calls/day on a free Google account,
  more than enough for a registration form.
- For very high-volume forms or compliance needs, upgrade to a real DB
  (Supabase / Postgres) — see roadmap notes in the registration API route.

---

## 🛠️ Troubleshooting

| Symptom | Fix |
| --- | --- |
| Server logs `Google Sheet persistence failed` with status 401 | `SECRET` mismatch — make sure `GOOGLE_SHEET_WEBHOOK_SECRET` exactly matches the Apps Script `SECRET`. |
| Server logs `unauthorized` | Same as above. |
| Server logs `aborted` | The 5s timeout was hit — usually Apps Script cold start. Retry the form once. |
| Sheet not receiving rows | Check **Apps Script → Executions** tab for errors. |
| `Authorization required` when first deploying | Click **Review permissions → Advanced → Go to (script) (unsafe) → Allow**. The "unsafe" warning is normal for personal Apps Scripts. |

---

## 📐 Schema of each row

The sheet auto-creates these columns on first POST:

| # | Column | Source |
| --- | --- | --- |
| 1 | Timestamp | server `new Date().toISOString()` |
| 2 | Full Name | form |
| 3 | Company | form |
| 4 | Business Email | form |
| 5 | Phone | form |
| 6 | Country | form |
| 7 | Industry | form |
| 8 | Company Size | form |
| 9 | Solutions of Interest | comma-joined array |
| 10 | Message | form |
| 11 | Consent | "Yes" / "No" |
| 12 | User Agent | request header |
| 13 | IP | x-forwarded-for / x-real-ip |
| 14 | Referer | request header |
