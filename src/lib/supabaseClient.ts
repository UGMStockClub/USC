import { createClient } from '@supabase/supabase-js';
import type { SupabaseClient } from '@supabase/supabase-js'; // <--- Use "import type"
// Optional: Import generated types later if you use them
// import type { Database } from '$lib/database.types';

const supabaseUrl: string | undefined = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey: string | undefined = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Replace 'any' with 'Database' when you generate types.
let supabaseInstance: SupabaseClient<any>;
if (!supabaseUrl || !supabaseAnonKey) {
	console.error('❌ Supabase Env Vars missing: URL or Anon Key not found. Check your .env file or environment configuration.');
	// Initialize with placeholders to prevent breaking imports, but it won't work
	supabaseInstance = createClient('', '');
} else {
	// Initialize the client with the provided credentials
	supabaseInstance = createClient(supabaseUrl, supabaseAnonKey);
	console.log('✅ Supabase client initialized with provided URL and Key.');
	// Optional: Add connection test as shown in the JS example if needed
}

// Export the initialized client
export const supabase: SupabaseClient<any> = supabaseInstance; // Use 'any' or 'Database'

// Helper function remains the same
export function isSupabaseConfigured(): boolean {
	return !!supabaseUrl && !!supabaseAnonKey;
}

// You can also export the status directly if needed elsewhere
interface SupabaseStatus {
	configured: boolean;
	urlProvided: boolean;
	keyProvided: boolean;
}

export const supabaseConfigStatus: SupabaseStatus = {
	configured: isSupabaseConfigured(),
	urlProvided: !!supabaseUrl,
	keyProvided: !!supabaseAnonKey,
};

// Log the status object for easier debugging
console.log('Supabase Config Status:', supabaseConfigStatus);