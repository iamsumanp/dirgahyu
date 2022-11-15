import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Dirgahyu</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
