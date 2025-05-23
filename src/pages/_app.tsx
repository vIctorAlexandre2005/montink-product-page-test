import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./layout";
import VariantProductContext from "@/contexts/VariantsContext";
import CepContext from "@/contexts/CepContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <VariantProductContext>
      <CepContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CepContext>
    </VariantProductContext>
  );
}
