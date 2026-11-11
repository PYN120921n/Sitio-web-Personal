import { createClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Si faltan las variables de entorno, el sitio funciona pero no guarda en la base.
export const supabase = url && key ? createClient(url, key) : null;
