import { type Session, type SupabaseClient } from '@supabase/supabase-js';
import { Database } from './DatabaseDefinitions'
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			getSession: () => Promise<Session | null>;
			supabase: SupabaseClient<Database>;
		}
		interface PageData {
			session: Session | null
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
