import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'replace with supabase url';
const supabaseAnonKey = 'replace with supabase anonkey';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
