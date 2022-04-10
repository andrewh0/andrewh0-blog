import dynamic from "next/dynamic";
import Head from "next/head";

import Layout from "components/layout";

const BubbleArt = dynamic(() => import("../components/bubbles/Scene"), {
  ssr: false,
});

const Index = () => (
  <Layout>
    <Head>
      <title>Andrew Ho</title>
    </Head>
    <BubbleArt />
  </Layout>
);

export default Index;
