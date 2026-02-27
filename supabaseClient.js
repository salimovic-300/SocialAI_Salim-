const { createClient } = require('@supabase/supabase-js');

// Public client (anon key) — used for signIn, signOut
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Admin client (service role key) — used for createUser without email confirmation
const supabaseAdmin = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY
);

module.exports = { supabase, supabaseAdmin };
