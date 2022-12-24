import Head from "next/head";
import MDX from "@mdx-js/runtime";

import Layout from "components/layout";
import { listPosts, showPost } from "lib/notion";

export const getStaticProps = async () => {
  const posts = await listPosts();

  const postContents = [];
  for (let { id } of posts) {
    const postContent = await showPost(id);
    postContents.push(postContent);
  }

  return {
    props: { posts, postContents },
  };
};

const Blog = ({ posts, postContents }: any) => {
  return (
    <Layout>
      <Head>
        <title>Andrew Ho</title>
      </Head>
      <MDX>{postContents[0]}</MDX>
    </Layout>
  );
};

export default Blog;
