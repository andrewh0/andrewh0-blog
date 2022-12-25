import dynamic from "next/dynamic";
import Head from "next/head";

import Layout from "components/layout";
import { Box } from "theme-ui";

const Placeholder = () => (
  <Box
    css={`
      position: relative;
      display: flex;
      height: 100%;
      width: 100%;
      max-height: 800px;
      border-radius: 16px;

      background-color: black;
      opacity: 0.1;
    `}
  />
);

const BubbleArt = dynamic(() => import("components/bubbles/Container"), {
  ssr: false,
  loading: Placeholder,
});

const Index = () => (
  <Layout isHomePage>
    <Head>
      <title>Andrew Ho</title>
    </Head>
    <BubbleArt />
  </Layout>
);

export default Index;
