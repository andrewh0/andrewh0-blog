import { ThemeProvider } from "theme-ui";
import { AppProps } from "next/app";

import theme from "components/theme";
import "../styles/reset.css";
// import "../styles/normalize.css";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
