-- CodeBuddy schema — run in the Supabase SQL editor
-- Safe to re-run: uses IF NOT EXISTS / drop policies carefully

create table if not exists public.codebuddy_profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text,
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

create index if not exists codebuddy_progress_user_idx
  on public.codebuddy_progress (user_id);

create index if not exists codebuddy_submissions_user_idx
  on public.codebuddy_submissions (user_id, created_at desc);

alter table public.codebuddy_profiles enable row level security;
alter table public.codebuddy_progress enable row level security;
alter table public.codebuddy_submissions enable row level security;

drop policy if exists "codebuddy_profiles_select_own" on public.codebuddy_profiles;
create policy "codebuddy_profiles_select_own"
  on public.codebuddy_profiles for select
  using (auth.uid() = id);

drop policy if exists "codebuddy_profiles_upsert_own" on public.codebuddy_profiles;
create policy "codebuddy_profiles_upsert_own"
  on public.codebuddy_profiles for all
  using (auth.uid() = id)
  with check (auth.uid() = id);

drop policy if exists "codebuddy_progress_own" on public.codebuddy_progress;
create policy "codebuddy_progress_own"
  on public.codebuddy_progress for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "codebuddy_submissions_own" on public.codebuddy_submissions;
create policy "codebuddy_submissions_own"
  on public.codebuddy_submissions for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create or replace function public.codebuddy_handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.codebuddy_profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1)))
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists codebuddy_on_auth_user_created on auth.users;
create trigger codebuddy_on_auth_user_created
  after insert on auth.users
  for each row execute function public.codebuddy_handle_new_user();
