import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const customTheme = extendTheme({
    fonts: {
      html: "Quicksand, sans-serif",
    },
  });

  return (
    <ChakraProvider theme={customTheme}>
      <Header />
      <Box padding={{ sm: "5px", md: "0" }} minHeight="85vh">
        <Component {...pageProps} />
      </Box>
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
