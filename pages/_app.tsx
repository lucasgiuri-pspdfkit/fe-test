import Head from "next/head";
import nextI18nConfig from "../next-i18next.config";
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
// Components
import Layout from "../components/layout/layout";
// Providers
import { StoreUsersProvider } from "../store/providers";
// Types
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Lucas Giuri Test</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <StoreUsersProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StoreUsersProvider>
    </>
  );
}

export default appWithTranslation(App, nextI18nConfig);
