import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import Layout from "../components/shared/Layout";
import { store } from "../redux/store";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class">
        <Script
          src="https://checkout.reepay.com/checkout.js"
          strategy="beforeInteractive"
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
