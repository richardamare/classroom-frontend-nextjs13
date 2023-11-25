import {ClientError, GraphQLClient} from "graphql-request";
import {getSdk} from "@/generated/graphql";
import {env} from "@/env.mjs";

const gqlClient = new GraphQLClient(`${env.NEXT_PUBLIC_API_URL}/graphql`, {});
export const api = getSdk(gqlClient);

export function getErrorMessage(e: any) {
	const err = e as ClientError;
	const message = err.response?.errors?.map((e) => e.message).join(", ");
	if (message) {
		return message;
	}
	return "Something went wrong";
}