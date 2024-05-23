import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "missing_env_var";
const VITE_SUPABASE_KEY =
  import.meta.env.VITE_SUPABASE_KEY || "missing_env_var";

if (!SUPABASE_URL || !VITE_SUPABASE_KEY) {
  throw new Error("Missing Supabase URL or Key");
}

export const supabaseClient = createClient(SUPABASE_URL, VITE_SUPABASE_KEY);
