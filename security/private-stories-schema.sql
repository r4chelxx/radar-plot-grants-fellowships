-- Radar PLOT: private editorial records, separate from public catalogs.
-- Apply only after identifying the intended account and completing a private backup.
create table if not exists public.private_stories (
  id text not null,
  user_id uuid not null references auth.users(id) on delete cascade,
  story jsonb not null,
  investigation jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (user_id, id),
  constraint private_stories_story_object check (jsonb_typeof(story) = 'object'),
  constraint private_stories_investigation_object check (investigation is null or jsonb_typeof(investigation) = 'object')
);
alter table public.private_stories enable row level security;
revoke all on public.private_stories from anon;
grant select, insert, update, delete on public.private_stories to authenticated;
create policy "Owner reads private stories" on public.private_stories for select to authenticated
  using ((select auth.uid()) = user_id);
create policy "Owner inserts private stories" on public.private_stories for insert to authenticated
  with check ((select auth.uid()) = user_id);
create policy "Owner updates private stories" on public.private_stories for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);
create policy "Owner deletes private stories" on public.private_stories for delete to authenticated
  using ((select auth.uid()) = user_id);
-- Do not import editorial data into source-controlled SQL or public fixtures.
