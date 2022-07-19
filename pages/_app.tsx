import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/shared/Layout";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Script strategy="beforeInteractive" src="/scripts/darkMode.js" />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
