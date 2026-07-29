-- =============================================================================
-- CodeBuddy SAFE SETUP — ADD-ONLY (idempotent, re-runnable)
-- =============================================================================
--
-- SAFETY CONTRACT (what this script will NEVER do when you click Run):
--   ✗ DROP TABLE / DROP SCHEMA / DROP DATABASE
--   ✗ DELETE / TRUNCATE / UPDATE of StudyBuddy or other app data
--   ✗ Touch any table that is not named codebuddy_*
--   ✗ Delete any auth.users rows just by running this file
--
-- What it DOES (safe):
--   ✓ CREATE TABLE IF NOT EXISTS for codebuddy_* tables only
--   ✓ ADD COLUMN IF NOT EXISTS for new profile fields
--   ✓ CREATE INDEX IF NOT EXISTS
--   ✓ Enable RLS + create policies only if missing
--   ✓ Create/replace ONLY functions named codebuddy_*
--   ✓ INSERT profile rows ON CONFLICT DO NOTHING (fills gaps, never overwrites)
--
-- Recommended: run this on your dedicated CodeBuddy Supabase project
-- (project ref wsqpiqznqwsbsdskfhdb), not on StudyBuddy’s project.
--
-- You can paste this whole file and Run it more than once — that is OK.
-- =============================================================================

-- ---------- 1) Tables (create if missing) ------------------------------------

create table if not exists public.codebuddy_profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text,
  avatar_kind text default 'color',
  avatar_emoji text default '🙂',
  avatar_color text default '#5ec8ff',
  avatar_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.codebuddy_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  language text not null,
  lesson_id text not null,
  completed boolean not null default false,
  best_score integer not null default 0,
  last_code text,
  updated_at timestamptz not null default now(),
  unique (user_id, language, lesson_id)
);

create table if not exists public.codebuddy_submissions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  language text not null,
  lesson_id text not null,
  code text not null,
  passed boolean not null default false,
  score integer not null default 0,
  feedback jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.codebuddy_practice_help (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  language text not null,
  lesson_id text not null,
  practice_id text not null,
  failed_attempts integer not null default 0,
  used_hint boolean not null default false,
  used_answer boolean not null default false,
  struggling boolean not null default false,
  topics text[] not null default '{}',
  updated_at timestamptz not null default now(),
  unique (user_id, language, lesson_id, practice_id)
);

-- ---------- 2) Columns (add if missing — never drops columns) ----------------

alter table public.codebuddy_profiles
  add column if not exists avatar_kind text default 'color';
alter table public.codebuddy_profiles
  add column if not exists avatar_emoji text default '🙂';
alter table public.codebuddy_profiles
  add column if not exists avatar_color text default '#5ec8ff';
alter table public.codebuddy_profiles
  add column if not exists avatar_url text;

-- ---------- 3) Indexes -------------------------------------------------------

create index if not exists codebuddy_progress_user_idx
  on public.codebuddy_progress (user_id);

create index if not exists codebuddy_submissions_user_idx
  on public.codebuddy_submissions (user_id, created_at desc);

create index if not exists codebuddy_practice_help_user_idx
  on public.codebuddy_practice_help (user_id, updated_at desc);

-- ---------- 4) Row Level Security (enable only; does not wipe data) ----------

alter table public.codebuddy_profiles enable row level security;
alter table public.codebuddy_progress enable row level security;
alter table public.codebuddy_submissions enable row level security;
alter table public.codebuddy_practice_help enable row level security;

-- ---------- 5) Policies (create only if the name is missing) -----------------

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'codebuddy_profiles'
      and policyname = 'codebuddy_profiles_select_own'
  ) then
    create policy "codebuddy_profiles_select_own"
      on public.codebuddy_profiles for select
      using (auth.uid() = id);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'codebuddy_profiles'
      and policyname = 'codebuddy_profiles_write_own'
  ) then
    create policy "codebuddy_profiles_write_own"
      on public.codebuddy_profiles for all
      using (auth.uid() = id)
      with check (auth.uid() = id);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'codebuddy_progress'
      and policyname = 'codebuddy_progress_own'
  ) then
    create policy "codebuddy_progress_own"
      on public.codebuddy_progress for all
      using (auth.uid() = user_id)
      with check (auth.uid() = user_id);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'codebuddy_submissions'
      and policyname = 'codebuddy_submissions_own'
  ) then
    create policy "codebuddy_submissions_own"
      on public.codebuddy_submissions for all
      using (auth.uid() = user_id)
      with check (auth.uid() = user_id);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'codebuddy_practice_help'
      and policyname = 'codebuddy_practice_help_own'
  ) then
    create policy "codebuddy_practice_help_own"
      on public.codebuddy_practice_help for all
      using (auth.uid() = user_id)
      with check (auth.uid() = user_id);
  end if;
end
$$;

-- ---------- 6) New-user profile helper (CodeBuddy-named only) ----------------
-- create or replace only updates THIS function name. It does not touch other apps.

create or replace function public.codebuddy_handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.codebuddy_profiles (id, display_name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1))
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

do $$
begin
  if not exists (
    select 1 from pg_trigger where tgname = 'codebuddy_on_auth_user_created'
  ) then
    create trigger codebuddy_on_auth_user_created
      after insert on auth.users
      for each row execute function public.codebuddy_handle_new_user();
  end if;
end
$$;

-- Backfill missing CodeBuddy profiles only (never, never update existing rows)
insert into public.codebuddy_profiles (id, display_name)
select
  u.id,
  coalesce(u.raw_user_meta_data->>'display_name', split_part(u.email, '@', 1))
from auth.users u
on conflict (id) do nothing;

-- ---------- 7) OPTIONAL: delete-own-account helper ---------------------------
-- IMPORTANT: Running this script does NOT delete anyone.
-- It only DEFINES a function the app can call later when a signed-in user
-- clicks “Delete my account” in CodeBuddy. Until then, nothing is removed.

create or replace function public.codebuddy_delete_own_account()
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
begin
  if uid is null then
    raise exception 'Not signed in';
  end if;
  -- Only the currently signed-in user; never a bulk wipe.
  delete from auth.users where id = uid;
end;
$$;

revoke all on function public.codebuddy_delete_own_account() from public;
grant execute on function public.codebuddy_delete_own_account() to authenticated;

-- =============================================================================
-- Done. Expected result in SQL Editor: Success. No rows returned.
-- That message is normal for DDL — it does NOT mean something failed.
-- =============================================================================
