import { type SupabaseClient } from "@supabase/supabase-js";
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			getSession: () => {}
			supabase: SupabaseClient
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
