import dynamic from "next/dynamic";
import Head from "next/head";

import Layout from "../components/layout";
import Navigation from "../components/navigation";
import ContentContainer from "../components/contentContainer";
import Footer from "../components/footer";

const BubbleArt = dynamic(() => import("../components/bubbles/Scene"), {
  ssr: false,
});

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>Andrew Ho</title>
      </Head>
      <ContentContainer>
        <Navigation />
        <BubbleArt />
        <Footer />
      </ContentContainer>
    </Layout>
  );
};

export default Index;
