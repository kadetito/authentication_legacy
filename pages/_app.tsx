import "../index.scss";
import { SessionProvider } from "next-auth/react";

import { useRouter } from "next/router";

import { SWRConfig } from "swr";
import { AuthProvider } from "../context/auth";

import en from "../lang/en.json";
import es from "../lang/es.json";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const { locale = "default" } = useRouter();
  return (
    <SessionProvider>
      <SWRConfig
        value={{
          fetcher: (
            resource: RequestInfo | URL,
            init: RequestInit | undefined
          ) => fetch(resource, init).then((res) => res.json()),
        }}
      >
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </SWRConfig>
    </SessionProvider>
  );
}
