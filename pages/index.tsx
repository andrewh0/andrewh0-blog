import dynamic from "next/dynamic";
import Head from "next/head";

import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Post from "../types/post";
import Navigation from "../components/navigation";
import ContentContainer from "../components/contentContainer";
import Footer from "../components/footer";

const BubbleArt = dynamic(() => import("../components/bubbles/Scene"), {
  ssr: false,
});

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
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

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
