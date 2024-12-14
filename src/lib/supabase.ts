import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://chat.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // This will be replaced with your actual anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);