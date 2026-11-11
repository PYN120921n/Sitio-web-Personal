# La web, de un enlace a todo

1. `npm install`
2. Crea un proyecto en Supabase y ejecuta `supabase/schema.sql` en el SQL Editor.
3. Copia `.env.example` a `.env.local` y pon tu URL y tu anon key.
4. `npm run dev` y abre http://localhost:3000

## Paso 3: verificación
- Recorre las 6 páginas y prueba cada enlace del menú y de /recursos.
- Con `npm run build && npm start`, abre cada página, usa "Ver código fuente" y pégalo en https://validator.w3.org/#validate_by_input
  (o publica el sitio y valida por URL).
