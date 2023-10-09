import { ThemeProvider as NextThemesProvider } from "next-themes";
import { AppProps } from "next/app";

import "../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      attribute="class"
      // @ts-ignore
      forcedTheme={Component.theme || null}
    >
      <Component {...pageProps} />
    </NextThemesProvider>
  );
}
