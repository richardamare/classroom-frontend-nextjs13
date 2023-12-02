import { QueryClientProvider } from "react-query";
import { useApi } from "@/hooks/use-api";

interface QueryProviderProps {
    children?: React.ReactNode;
}

export function QueryProvider(props: QueryProviderProps) {
    const api = useApi();
    return (
        <QueryClientProvider client={api.client}>
            {props.children}
        </QueryClientProvider>
    );
}
