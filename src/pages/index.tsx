import dynamic from "next/dynamic";
import Head from "next/head";

import Layout from "components/layout";
import Navigation from "components/navigation";
import { Box } from "theme-ui";
import { useIsClientDarkMode } from "hooks";

const Placeholder = () => {
  // Prevent flash in dark mode
  const isDarkMode = useIsClientDarkMode();

  return (
    <Box
      css={`
        position: relative;
        display: flex;
        height: 100%;
        width: 100%;
        max-height: 640px;
        border-radius: 16px;
      `}
      sx={{
        bg: isDarkMode === null ? "none" : "gray2",
      }}
    />
  );
};

const BubbleArt = dynamic(() => import("components/bubbles/Container"), {
  ssr: false,
  loading: Placeholder,
});

const Index = () => (
  <Layout isHomePage>
    <Head>
      <title>Andrew Ho</title>
    </Head>
    <Navigation />
    <BubbleArt />
  </Layout>
);

export default Index;
