import Head from "next/head";
import { GetStaticProps } from "next";

import Layout from "components/layout";
import { listPosts, showPost } from "lib/notion";
import SubpageNavigation from "components/subpageNavigation";
import PostBody from "components/postBody";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  if (id && typeof id === "string") {
    const postContent = await showPost(id);
    return {
      props: { note: postContent },
    };
  }

  return {
    props: { note: "" },
  };
};

export async function getStaticPaths() {
  const notes = await listPosts();

  return {
    paths: notes.map((note: any) => {
      return {
        params: {
          id: note.id,
        },
      };
    }),
    fallback: false,
  };
}

const Note = ({ note }: any) => {
  return (
    <Layout>
      <Head>
        <title>{note.title} &middot; Andrew Ho</title>
      </Head>
      <SubpageNavigation previousPagePath="/notes" previousPageLabel="Notes" />
      <PostBody content={note} />
    </Layout>
  );
};

export default Note;
