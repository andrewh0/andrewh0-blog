import Head from "next/head";
import theme from "components/theme";

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
      content={(theme?.colors?.background as string | undefined) ?? "white"}
      media="(prefers-color-scheme: light)"
      // Needed so that next/head doesn't delete one of these "theme-color" declarations
      key="theme-color-light"
    />
    <meta
      name="theme-color"
      content={
        (theme?.colors?.modes?.dark.background as string | undefined) ?? "black"
      }
      media="(prefers-color-scheme: dark)"
      // Needed so that next/head doesn't delete one of these "theme-color" declarations
      key="theme-color-dark"
    />
    <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
    <meta name="description" content="This is the site description." />
    <meta name="viewport" content="initial-scale=1, user-scalable=no" />
    {/* <meta property="og:image" content={HOME_OG_IMAGE_URL} /> */}
    <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
  </Head>
);

export default Meta;
