const SUPABASE_URL = "https://mfajjvtpqjeuawqwuena.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_xQVRK6ntH7I-tLFTX6cMTA_6Ok2O5on";

if (window.supabase?.createClient) {
  window.edenSupabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );
} else {
  console.error("Supabase JS v2 did not load; Eden Homes Supabase client was not initialized.");
}
