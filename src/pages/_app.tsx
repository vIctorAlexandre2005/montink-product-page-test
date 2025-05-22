import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./layout";
import VariantProductContext from "@/contexts/VariantsContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <VariantProductContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </VariantProductContext>
  );
}
