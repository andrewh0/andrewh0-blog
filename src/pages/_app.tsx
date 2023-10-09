import { ThemeProvider } from "theme-ui";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { AppProps } from "next/app";

import theme from "components/theme";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      attribute="class"
      // @ts-ignore
      forcedTheme={Component.theme || null}
    >
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </NextThemesProvider>
  );
}
