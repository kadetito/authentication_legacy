import "../index.scss";
import { SessionProvider } from "next-auth/react";

import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import en from "../lang/en.json";
import es from "../lang/es.json";

import type { AppProps } from "next/app";
// import { SWRConfig } from "swr";

import { AuthProvider } from "../context/auth";

const messages = {
  es,
  en,
};

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  return (
    <SessionProvider>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {/* <SWRConfig
        value={{
          fetcher: (
            resource: RequestInfo | URL,
            init: RequestInit | undefined
          ) => fetch(resource, init).then((res) => res.json()),
        }}
      > */}
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
        {/* </SWRConfig> */}
      </IntlProvider>
    </SessionProvider>
  );
}
