-- =============================================================================
-- OPTIONAL — remove ONLY the signed-in CodeBuddy user's login
-- =============================================================================
-- Supabase may warn about a destructive keyword. That is expected here.
--
-- Scope (intentionally narrow):
--   • Affects ONLY auth.uid() — the person currently signed in
--   • Does NOT touch other users
--   • Does NOT touch StudyBuddy tables or any non-codebuddy data
--   • Does NOT run until the app calls this function after the user confirms
--
-- Running this SQL file alone does not remove anyone; it only defines the helper.
-- Run AFTER schema.sql if you want “Delete my account” to remove the login too.
-- (The app already removes that user’s codebuddy_* rows via RLS before calling this.)
-- =============================================================================

do $$
begin
  if not exists (
    select 1 from pg_proc p
    join pg_namespace n on n.oid = p.pronamespace
    where n.nspname = 'public' and p.proname = 'codebuddy_delete_own_account'
  ) then
    execute $fn$
      create function public.codebuddy_delete_own_account()
      returns void
      language plpgsql
      security definer
      set search_path = public
      as $body$
      declare
        uid uuid := auth.uid();
      begin
        if uid is null then
          raise exception 'Not signed in';
        end if;
        -- Single-user only
        delete from auth.users where id = uid;
      end;
      $body$;
    $fn$;
  end if;
end
$$;

revoke all on function public.codebuddy_delete_own_account() from public;
grant execute on function public.codebuddy_delete_own_account() to authenticated;
