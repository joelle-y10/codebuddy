-- =============================================================================
-- OPTIONAL — CodeBuddy “delete my account” helper
-- =============================================================================
-- Supabase may warn that this contains destructive operations because it
-- defines a function with a DELETE inside. That is expected for this file.
--
-- Running this does NOT delete anyone by itself.
-- It only creates a function the app calls when a signed-in user clicks
-- “Delete my account” in CodeBuddy (deletes only that user’s auth row).
--
-- Run AFTER schema.sql if you want in-app account deletion.
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
        delete from auth.users where id = uid;
      end;
      $body$;
    $fn$;
  end if;
end
$$;

revoke all on function public.codebuddy_delete_own_account() from public;
grant execute on function public.codebuddy_delete_own_account() to authenticated;
