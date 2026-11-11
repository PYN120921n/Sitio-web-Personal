create table if not exists public.contactos (
  id bigint generated always as identity primary key,
  nombre text not null,
  correo text not null,
  fecha_nacimiento date not null,
  pais text not null,
  tipo text not null,
  temas text[] not null,
  nivel int not null check (nivel between 1 and 10),
  mensaje text not null,
  creado_en timestamptz not null default now()
);
alter table public.contactos enable row level security;
create policy "cualquiera puede enviar" on public.contactos for insert to anon with check (true);
