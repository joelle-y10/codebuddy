# CodeBuddy ↔ Supabase

**Project:** `wsqpiqznqwsbsdskfhdb` (new project — not StudyBuddy)

## Setup checklist

1. Project URL set in `client/.env`
2. Paste **anon public** key into `client/.env` as `VITE_SUPABASE_ANON_KEY`
3. Run [`schema.sql`](./schema.sql) in this project's SQL Editor
4. Enable Email auth (Authentication → Providers → Email)
5. **Turn off email confirmation** so sign-up works instantly:
   - Authentication → Providers → Email
   - Disable **Confirm email**
   - Save
6. Restart `npm run dev`, then Sign up in the app (you’ll be signed in right away)

## Profile settings

The top-bar **Profile** chip opens a side panel to change display name, email, or password, and to delete the account.

Account deletion needs the `codebuddy_delete_own_account` function from [`schema.sql`](./schema.sql). If delete fails, re-run that script in the SQL Editor.
