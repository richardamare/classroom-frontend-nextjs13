import { GraphQLClient } from "graphql-request";
import { env } from "@/env.mjs";
import { useSession } from "next-auth/react";
import { useMemo } from "react";
import { getSdk } from "@/generated/graphql";
import { QueryClient } from "react-query";
import { getErrorMessage } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

export function useApi() {
    const session = useSession();
    const toast = useToast();

    return useMemo(() => {
        const gqlClient = new GraphQLClient(
            `${env.NEXT_PUBLIC_API_URL}/graphql`,
            {
                headers: {
                    Authorization: `Bearer ${session.data?.accessToken}`,
                },
            },
        );

        const client = new QueryClient({
            defaultOptions: {
                queries: {
                    enabled: session.status === "authenticated",
                    refetchOnMount: false,
                    refetchOnWindowFocus: false,
                    refetchOnReconnect: false,
                    onError: (error) => {
                        const message = getErrorMessage(error);
                        toast.error(message);
                    },
                },
            },
        });

        return {
            ...getSdk(gqlClient),
            client,
            isAuthenticated: session.status === "authenticated",
        };
    }, [session.data]);
}
