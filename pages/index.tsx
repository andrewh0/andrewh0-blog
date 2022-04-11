import dynamic from "next/dynamic";
import Head from "next/head";

import Layout from "components/Layout";

const BubbleArt = dynamic(() => import("../components/bubbles/Scene"), {
  ssr: false,
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
