import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ThemeProvider} from "@/components/provider/theme-provider";

export default function App({Component, pageProps}: AppProps) {

	const client = new QueryClient();

	return <QueryClientProvider client={client}>
		<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
			<Component {...pageProps} />
		</ThemeProvider>
	</QueryClientProvider>
}
