import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import NextLink from "next/link";

interface Props {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const ContentLayout: FC<Props> = ({ children, title, description }) => {
  const { locales }: any = useRouter();

  const intl = useIntl();
  const titlepage = intl.formatMessage({ id: title });
  const pageDescription = intl.formatMessage({
    id: description,
  });

  return (
    <>
      <Head>
        <title>{titlepage}</title>
        <meta name="description" content={pageDescription} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate" href="http://example.com" hrefLang="x-default" />
        <link rel="alternate" href="http://example.com" hrefLang="en" />
        <link rel="alternate" href="http://example.com" hrefLang="es" />
      </Head>
      <header>
        <div>
          {[...locales].sort().map(
            (locale) =>
              locale !== "default" && (
                <NextLink key={locale} href="/app/dashboard/" locale={locale}>
                  {locale} -
                </NextLink>
              )
          )}
        </div>
      </header>

      <main>
        <div className="form-container">
          <h1>
            <FormattedMessage
              id="page.home.title"
              values={{ b: (chunks) => <b>{chunks}</b> }}
            />
          </h1>

          <p>
            <FormattedMessage id="page.home.description" />
          </p>
          <section>{children}</section>
        </div>
      </main>
    </>
  );
};
