import Head from "next/head";

import Layout from "components/layout";
import { listPosts } from "lib/notion";
import SubpageNavigation from "components/subpageNavigation";
import Heading from "components/content/heading";
import { Box } from "theme-ui";
import Link from "components/content/link";

export const getStaticProps = async () => {
  const posts = await listPosts();

  return {
    props: { posts },
    revalidate: 60, // seconds
  };
};

const NotesIndex = ({ posts }: any) => {
  return (
    <Layout>
      <Head>
        <title>Notes &middot; Andrew Ho</title>
      </Head>
      <SubpageNavigation previousPagePath="/" previousPageLabel="Home" />
      <Heading title="Notes" />
      <ul>
        {posts.map(({ id, slug, title, publishedAt }: any) => (
          <Box
            as="li"
            key={id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Link href={`/notes/${slug}`}>{title}</Link>
            <span
              sx={{
                fontFamily: "monospace",
                color: "gray11",
                fontSize: 1,
              }}
            >
              {publishedAt}
            </span>
          </Box>
        ))}
      </ul>
    </Layout>
  );
};

export default NotesIndex;
