import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";

function MyApp({ Component,   pageProps: { session, ...pageProps }, }: AppProps) {
  const router = useRouter();
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} key={router.asPath} />
    </SessionProvider>
  );
}

export default MyApp
