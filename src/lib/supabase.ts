import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oykovjmddmjripkupejt.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY ?? ""; // Fallback to an empty string

if (!supabaseKey) {
  throw new Error("SUPABASE_KEY is missing. Please add it to your environment variables.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
