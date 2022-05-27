import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header />
      <div>
        <Component {...pageProps} />
      </div>
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
