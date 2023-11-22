import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {QueryCache, QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ThemeProvider} from "@/components/providers/theme-provider";
import ModalProvider from "@/components/providers/modal-provider";
import {Toaster} from "sonner";
import {useToast} from "@/hooks/use-toast";

export default function App({Component, pageProps}: AppProps) {
	const toast = useToast();

	const client = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnMount: false,
				refetchOnWindowFocus: false,
				refetchOnReconnect: false,
				staleTime: 0,
				cacheTime: 24000,
			},
		},
		queryCache: new QueryCache({
			onError: (e) => {
				const err = e as Error;
				toast.error(err.message);
			},
		}),
	});

	return <QueryClientProvider client={client}>
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			<ModalProvider/>
			<Toaster richColors/>
			<Component {...pageProps} />
		</ThemeProvider>
	</QueryClientProvider>
}
