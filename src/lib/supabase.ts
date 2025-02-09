import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oykovjmddmjripkupejt.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY ?? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95a292am1kZG1qcmlwa3VwZWp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxMDk5MDYsImV4cCI6MjA1NDY4NTkwNn0.ykOUiLVCi_ZgUl2_o1-_ND6IavnN0P4gURZdpuMRU4M"; // Fallback to an empty string

if (!supabaseKey) {
  throw new Error("SUPABASE_KEY is missing. Please add it to your environment variables.");
}

export const supabase = createClient(supabaseUrl, supabaseKey);


console.log("supabase connected:", supabase)