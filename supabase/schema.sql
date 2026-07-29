-- =============================================================================
-- CodeBuddy SAFE SETUP (use on a NEW Supabase project)
-- =============================================================================
-- Recommended: create a brand-new project just for CodeBuddy so StudyBuddy
-- data is never in the same database.
--
-- This script ONLY creates CodeBuddy tables/policies. It does not delete data.
-- =============================================================================

create table if not exists public.codebuddy_profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text,
  avatar_kind text default 'color',
  avatar_emoji text default '🙂',
  avatar_color text default '#5ec8ff',
  avatar_url text,
  created_at timestamptz not null default now()
);

-- Safe upgrades for existing projects
alter table public.codebuddy_profiles add column if not exists avatar_kind text default 'color';
alter table public.codebuddy_profiles add column if not exists avatar_emoji text default '🙂';
alter table public.codebuddy_profiles add column if not exists avatar_color text default '#5ec8ff';
alter table public.codebuddy_profiles add column if not exists avatar_url text;

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

create index if not exists codebuddy_progress_user_idx
  on public.codebuddy_progress (user_id);

create index if not exists codebuddy_submissions_user_idx
  on public.codebuddy_submissions (user_id, created_at desc);

alter table public.codebuddy_profiles enable row level security;
alter table public.codebuddy_progress enable row level security;
alter table public.codebuddy_submissions enable row level security;

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
end
$$;

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

insert into public.codebuddy_profiles (id, display_name)
select
  u.id,
  coalesce(u.raw_user_meta_data->>'display_name', split_part(u.email, '@', 1))
from auth.users u
on conflict (id) do nothing;

-- Let a signed-in user permanently delete their own auth account (+ cascaded rows).
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
  delete from auth.users where id = uid;
end;
$$;

revoke all on function public.codebuddy_delete_own_account() from public;
grant execute on function public.codebuddy_delete_own_account() to authenticated;
