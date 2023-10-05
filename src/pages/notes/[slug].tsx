import Head from "next/head";
import { GetStaticProps } from "next";

import Layout from "components/layout";
import { listPosts, showPost } from "lib/notion";
import SubpageNavigation from "components/subpageNavigation";
import PostBody from "components/postBody";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  if (slug && typeof slug === "string") {
    const allPostsMetadata = await listPosts();

    const postMetadata = allPostsMetadata.find((p) => p.slug === slug);

    if (!postMetadata) {
      return {
        notFound: true,
      };
    }

    const postContent = await showPost(postMetadata.id);

    return {
      props: { note: postContent, metadata: postMetadata },
      revalidate: 60, // seconds
    };
  }

  return {
    notFound: true,
  };
};

export async function getStaticPaths() {
  const notes = await listPosts();

  return {
    paths: notes.map((note: any) => {
      return {
        params: {
          slug: note.slug,
        },
      };
    }),
    fallback: false,
  };
}

const Note = ({ note, metadata }: any) => {
  // Save title to a variable to avoid Next.js warning about multiple elements in <title> as children
  const title = `${metadata.title} · Andrew Ho`;
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <SubpageNavigation previousPagePath="/notes" previousPageLabel="Notes" />
      <PostBody content={note} />
    </Layout>
  );
};

export default Note;
