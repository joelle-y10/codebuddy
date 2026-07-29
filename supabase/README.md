# CodeBuddy ↔ Supabase (safe setup)

**Project:** `wsqpiqznqwsbsdskfhdb` (CodeBuddy’s own project — keep StudyBuddy separate)

## Is `schema.sql` destructive?

**No — not when you Run it.** It is **add-only**:

| It will | It will not |
|--------|-------------|
| Create `codebuddy_*` tables if missing | Drop tables or schemas |
| Add new columns if missing | Delete StudyBuddy / other data |
| Add indexes / RLS / policies if missing | Wipe progress |
| Define `codebuddy_*` helper functions | Delete users just by running the file |

`Success. No rows returned.` in the SQL Editor is **normal** for this script.

## How to run it safely

1. Open **your CodeBuddy** Supabase project (not StudyBuddy)
2. Left sidebar → **SQL Editor** → New query
3. Paste the full contents of [`schema.sql`](./schema.sql)
4. Click **Run**
5. You can run it again later anytime — safe to re-run

## Rest of app setup

1. Project URL + anon key in `client/.env`
2. Authentication → Providers → Email → **Confirm email OFF** (for instant sign-up)
3. Keep **Secure email change** ON if you want confirmation emails on email changes
4. Authentication → URL configuration — add:
   - `http://localhost:5199/#/account`
   - `https://joelle-y10.github.io/codebuddy/#/account`
5. Restart `npm run dev` (or wait for Pages deploy)

## Profile / delete account note

- Profile avatar fields need the columns from this script (re-run if avatars fail to save)
- **Delete account** only happens when someone clicks delete in the app; defining that function in SQL does not remove anyone
