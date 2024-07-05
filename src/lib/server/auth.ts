import { Lucia } from 'lucia';
import { dev } from '$app/environment';
import { PrismaAdapter } from '@lucia-auth/adapter-prisma';
import { PrismaClient } from '@prisma/client';
import { Discord } from 'arctic';
import { env } from '$env/dynamic/private';

const client = new PrismaClient();

export const discord = new Discord(
	env.DISCORD_CLIENT_ID ?? '',
	env.DISCORD_CLIENT_SECRET ?? '',
	env.DISCORD_REDIRECT_URI ?? ''
);

const adapter = new PrismaAdapter(client.session, client.user);
export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: !dev
		}
	},
	getUserAttributes: (attributes) => {
		return {
			avatar: attributes.avatar,
			username: attributes.username,
			role: attributes.role
		};
	}
});

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

interface DatabaseUserAttributes {
	avatar: string;
	username: string;
	role: string;
}
