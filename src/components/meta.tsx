import Head from "next/head";
import { gray, grayDark, grayDarkP3, grayP3 } from "@radix-ui/colors";

const Meta = () => (
  <Head>
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/favicon/site.webmanifest" />
    <link
      rel="mask-icon"
      href="/favicon/safari-pinned-tab.svg"
      color="#000000"
    />
    <link rel="shortcut icon" href="/favicon/favicon.ico" />
    <meta name="msapplication-TileColor" content="#000000" />
    <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
    <meta
      name="theme-color"
      content={gray.gray1 ?? "blue"}
      media="(prefers-color-scheme: light) and (color-gamut: srgb)"
      // Needed so that next/head doesn't delete one of these "theme-color" declarations
      key="theme-color-light"
    />
    <meta
      name="theme-color"
      content={grayDark.gray1 ?? "green"}
      media="(prefers-color-scheme: dark) and (color-gamut: srgb)"
      // Needed so that next/head doesn't delete one of these "theme-color" declarations
      key="theme-color-dark"
    />
    <meta
      name="theme-color"
      content={grayP3.gray1 ?? "red"}
      media="(prefers-color-scheme: light) and (color-gamut: p3)"
      // Needed so that next/head doesn't delete one of these "theme-color" declarations
      key="theme-color-light-p3"
    />
    <meta
      name="theme-color"
      content={grayDarkP3.gray1 ?? "yellow"}
      media="(prefers-color-scheme: dark) and (color-gamut: p3)"
      // Needed so that next/head doesn't delete one of these "theme-color" declarations
      key="theme-color-dark-p3"
    />
    <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
    <meta
      name="description"
      content="Andrew Ho is a software engineer based in the San Francisco Bay Area."
    />
    <meta name="viewport" content="initial-scale=1, user-scalable=no" />
    {/* <meta property="og:image" content={HOME_OG_IMAGE_URL} /> */}
  </Head>
);

export default Meta;
