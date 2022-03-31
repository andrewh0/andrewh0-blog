import { AppProps } from "next/app";
import "../styles/normalize.css";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
