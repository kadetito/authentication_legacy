import { FC } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

interface Props {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export const AuthLayout: FC<Props> = ({ children, title, description }) => {
  const { locales }: any = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate" href="http://example.com" hrefLang="x-default" />
        <link rel="alternate" href="http://example.com" hrefLang="en" />
        <link rel="alternate" href="http://example.com" hrefLang="es" />
      </Head>
      <main>
        <div className="form-container">
          <div>
            <h1>Titulo de la autenticacion</h1>
            <p>descripcion de la pagina</p>
          </div>
          <section>{children}</section>
        </div>
      </main>
    </>
  );
};
