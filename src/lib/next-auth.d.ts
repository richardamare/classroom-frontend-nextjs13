// @ts-ignore
import "next-auth";
import {api} from "@/lib/api";
// @prettier-ignore

type User = Awaited<ReturnType<typeof api.login>>["login"]["user"]

declare module "next-auth" {
	/**
	 * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		user: User;
		accessToken: string;
		refreshToken: string;
		expiresAt: number;
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		user: User;
		accessToken: string;
		refreshToken: string;
		expiresAt: number;
	}
}