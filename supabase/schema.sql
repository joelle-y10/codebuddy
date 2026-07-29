-- =============================================================================
-- CodeBuddy SAFE SETUP — NON-DESTRUCTIVE (add-only)
-- =============================================================================
-- This file avoids operations Supabase flags as destructive.
-- Safe to re-run. Expected result: Success. No rows returned.
-- Run on your CodeBuddy project only (not StudyBuddy).
-- =============================================================================

-- ---------- Tables (create if missing) ---------------------------------------

create table if not exists public.codebuddy_profiles (
  id uuid primary key references auth.users (id),
  display_name text,
  avatar_kind text default 'color',
  avatar_emoji text default '🙂',
  avatar_color text default '#5ec8ff',
  avatar_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.codebuddy_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id),
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
  user_id uuid not null references auth.users (id),
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
  user_id uuid not null references auth.users (id),
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

-- ---------- Columns (add if missing) -----------------------------------------

alter table public.codebuddy_profiles
  add column if not exists avatar_kind text default 'color';
alter table public.codebuddy_profiles
  add column if not exists avatar_emoji text default '🙂';
alter table public.codebuddy_profiles
  add column if not exists avatar_color text default '#5ec8ff';
alter table public.codebuddy_profiles
  add column if not exists avatar_url text;

-- ---------- Indexes ----------------------------------------------------------

create index if not exists codebuddy_progress_user_idx
  on public.codebuddy_progress (user_id);

create index if not exists codebuddy_submissions_user_idx
  on public.codebuddy_submissions (user_id, created_at desc);

create index if not exists codebuddy_practice_help_user_idx
  on public.codebuddy_practice_help (user_id, updated_at desc);

-- ---------- Row Level Security -----------------------------------------------

alter table public.codebuddy_profiles enable row level security;
alter table public.codebuddy_progress enable row level security;
alter table public.codebuddy_submissions enable row level security;
alter table public.codebuddy_practice_help enable row level security;

-- ---------- Policies (only if missing) ---------------------------------------

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

-- ---------- New-user profile helper ------------------------------------------

do $$
begin
  if not exists (
    select 1 from pg_proc p
    join pg_namespace n on n.oid = p.pronamespace
    where n.nspname = 'public' and p.proname = 'codebuddy_handle_new_user'
  ) then
    execute $fn$
      create function public.codebuddy_handle_new_user()
      returns trigger
      language plpgsql
      security definer
      set search_path = public
      as $body$
      begin
        insert into public.codebuddy_profiles (id, display_name)
        values (
          new.id,
          coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1))
        )
        on conflict (id) do nothing;
        return new;
      end;
      $body$;
    $fn$;
  end if;
end
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

-- Backfill missing profiles only (skips rows that already exist)
insert into public.codebuddy_profiles (id, display_name)
select
  u.id,
  coalesce(u.raw_user_meta_data->>'display_name', split_part(u.email, '@', 1))
from auth.users u
on conflict (id) do nothing;

-- =============================================================================
-- Done. Optional account-removal helper is a separate SQL file in /supabase.
-- =============================================================================
