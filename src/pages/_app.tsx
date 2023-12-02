import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/components/providers/theme-provider";
import ModalProvider from "@/components/providers/modal-provider";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { QueryProvider } from "@/components/providers/query-provider";

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps) {
    return (
        <SessionProvider session={session} basePath="/api/auth">
            <QueryProvider>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <ModalProvider />
                    {/*<AlertProvider/>*/}
                    <Toaster richColors />
                    <Component {...pageProps} />
                </ThemeProvider>
            </QueryProvider>
        </SessionProvider>
    );
}
