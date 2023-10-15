import { notFound } from "next/navigation";

import { listPosts, showPost } from "lib/notion";
import Layout from "components/layout";
import SubpageNavigation from "components/subpageNavigation";
import PostBody from "components/postBody";

type Params = {
  slug: string;
};

export async function generateStaticParams() {
  const notes = await listPosts();
  return notes.map((note: any) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { metadata } = await getNote(params.slug);

  return {
    title: `${metadata.title} · Andrew Ho`,
  };
}

const getNote = async (slug: string) => {
  const allPostsMetadata = await listPosts();

  const postMetadata = allPostsMetadata.find((p) => p.slug === slug);

  if (!postMetadata) {
    notFound();
  }

  const postContent = await showPost(postMetadata.id);

  return { note: postContent, metadata: postMetadata };
};

const Note = async ({ params }: { params: Params }) => {
  const { note } = await getNote(params.slug);

  return (
    <Layout>
      <SubpageNavigation previousPagePath="/notes" previousPageLabel="Notes" />
      <PostBody content={note} />
    </Layout>
  );
};

export const revalidate = 60; // seconds
export const dynamicParams = false;

export default Note;
