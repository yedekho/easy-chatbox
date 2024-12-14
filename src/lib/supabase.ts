import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gidnjcjahnkrhakjjwvg.supabase.co'; // Replace with your Project URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdpZG5qY2phaG5rcmhha2pqd3ZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxNTc4NDAsImV4cCI6MjA0OTczMzg0MH0.BK2JBsRpuXNSwK9XFE1w9n1jzCT0arWEtLK-1fLcpNI'; // Replace with your anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
