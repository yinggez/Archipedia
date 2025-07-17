import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://qaouwcknoaryrspqablj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhb3V3Y2tub2FyeXJzcHFhYmxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI1Nzk4NTYsImV4cCI6MjA2ODE1NTg1Nn0.c1OIESzwvH4TWUfEAG4ytfSEGcxKuvTjwMQJDSc8lvc';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);