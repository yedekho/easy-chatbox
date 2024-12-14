import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'YOUR_PROJECT_URL'; // Replace with your Project URL
const supabaseAnonKey = 'YOUR_ANON_KEY'; // Replace with your anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);