import Head from "next/head";
import MDX from "@mdx-js/runtime";
import { useThemedStylesWithMdx } from "@theme-ui/mdx";

import Layout from "components/layout";
import { listPosts, showPost } from "lib/notion";
import SubpageNavigation from "components/subpageNavigation";

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
  const componentsWithStyles = useThemedStylesWithMdx(null);
  return (
    <Layout>
      <Head>
        <title>Andrew Ho</title>
      </Head>
      <SubpageNavigation previousPagePath="/notes" previousPageLabel="Notes" />
      <MDX components={componentsWithStyles}>{postContents[0]}</MDX>
    </Layout>
  );
};

export default Blog;
