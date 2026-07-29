# CodeBuddy ↔ Supabase

**Project:** `wsqpiqznqwsbsdskfhdb` (new project — not StudyBuddy)

## Setup checklist

1. Project URL set in `client/.env`
2. Paste **anon public** key into `client/.env` as `VITE_SUPABASE_ANON_KEY`
3. Run [`schema.sql`](./schema.sql) in this project's SQL Editor (includes avatar columns + delete account)
4. Enable Email auth (Authentication → Providers → Email)
5. **Turn off email confirmation for sign-up** so new accounts can sign in immediately:
   - Authentication → Providers → Email
   - Disable **Confirm email**
   - Save
6. Keep **Secure email change** ON (recommended) so changing email sends confirmation to the involved addresses
7. Authentication → URL configuration → add redirect URLs:
   - Local: `http://localhost:5199/#/account`
   - Live: `https://joelle-y10.github.io/codebuddy/#/account`
   - Also allow the site origins if prompted
8. Restart `npm run dev`, then Sign up in the app

## Profile & account settings

The top-bar **Profile** chip opens a side panel with:

- **Profile** — display name + picture (emoji, color, or uploaded image)
- **Account settings** — change email (confirmation email), change password (email link), sign out, delete account

**Forgot password** lives on the Account / Sign in page and emails a reset link.

Password change from settings also emails a link to the account’s current address (same recovery flow as forgot password).

## If something fails

- Avatar save errors mentioning columns → re-run [`schema.sql`](./schema.sql)
- Delete account errors → same (needs `codebuddy_delete_own_account`)
- Reset emails not arriving → check Supabase Auth email settings / spam, and confirm redirect URLs above
