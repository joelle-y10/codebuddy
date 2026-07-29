# CodeBuddy ↔ Supabase (safe setup)

**Project:** `wsqpiqznqwsbsdskfhdb` (CodeBuddy only — keep StudyBuddy separate)

## Which file do I run?

| File | Purpose | Destructive warning? |
|------|---------|----------------------|
| [`schema.sql`](./schema.sql) | **Use this.** Tables, columns, RLS, profiles | Should be **clean** (add-only) |
| [`schema-optional-delete-account.sql`](./schema-optional-delete-account.sql) | Only if you want in-app “Delete account” | May warn — optional |

## How to run `schema.sql`

1. Open your **CodeBuddy** Supabase project  
2. **SQL Editor** → New query  
3. Paste **only** [`schema.sql`](./schema.sql)  
4. **Run**  
5. `Success. No rows returned` = worked  

Safe to re-run anytime.

## What `schema.sql` never does

- No `DROP` / `TRUNCATE` / row `DELETE` / bulk `UPDATE`
- No `ON DELETE CASCADE`
- Does not remove StudyBuddy or other data
- Does not delete any users when you run it

## App setup (after SQL)

1. URL + anon key in `client/.env`  
2. Auth → Email → **Confirm email OFF** for instant sign-up  
3. Redirect URLs:  
   - `http://localhost:5199/#/account`  
   - `https://joelle-y10.github.io/codebuddy/#/account`  
4. Restart `npm run dev` or wait for Pages  

## Optional delete-account SQL

Only run [`schema-optional-delete-account.sql`](./schema-optional-delete-account.sql) if you want the Profile → Delete account button to work in the cloud. Skip it if you don’t need that.
