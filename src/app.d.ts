declare global {
	namespace App {
		interface Locals {
			user: import('lucia').User | null;
			session: import('lucia').Session | null;
		}
	}
}

interface ImportMetaEnv {
	DISCORD_CLIENT_ID: string;
	DISCORD_CLIENT_SECRET: string;
}

export {};
