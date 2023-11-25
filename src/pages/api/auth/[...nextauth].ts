import NextAuth, {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import {NextApiRequest, NextApiResponse} from "next";
import {LoginForm} from "@/lib/validations";
import {api, getErrorMessage} from "@/lib/api";
import {env} from "@/env.mjs";

const authOptions: NextAuthOptions = {
	providers: [
		CredentialsProvider({
			id: "credentials",
			name: "Credentials",
			credentials: {
				email: {label: "Email", type: "text"},
				password: {label: "Password", type: "password"},
			},
			async authorize(data) {
				const result = LoginForm.safeParse(data);

				if (!result.success) {
					const message = result.error.issues.map((i) => i.message).join(", ");
					throw new Error(message);
				}

				try {
					const {login} = await api.login({
						input: {
							...result.data,
						},
					});

					return login as any;
				} catch (e) {
					const message = getErrorMessage(e)
					throw new Error(message);
				}
			},
		}),
	],
	pages: {
		signIn: "/",
		signOut: "/sign-out",
		error: "/",
	},
	secret: env.NEXTAUTH_SECRET,
	callbacks: {
		jwt({token, user}) {
			if (user) return {...token, ...user};

			if (token?.expiresAt && token.expiresAt < new Date().getTime()) {
				return {} as never;
			}

			return token;
		},
		session({session, token}) {
			if (token) return {...session, ...token};
			return session;
		},
	},
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	return NextAuth(req, res, authOptions);
}