import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "reset-css";
import type { AppProps } from "next/app";
import PageLayout from "../src/components/pageLayout";

// React Providers:
// A provider is a component that provides context for your whole application.
// Context is state that can be shared and accessed in any component
// A provider just gives every component render inside of it access to that context.

const theme = extendTheme({
  colors: {
    gray: {
      100: "#f5f5f5",
      200: "#EEEEEE",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
  },
  components: {
    Button: {
      variants: {
        link: {
          ":focus": {
            outline: "none",
            boxShadow: "none",
          },
        },
      },
    },
  },
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ChakraProvider>
  );
};

export default MyApp;
