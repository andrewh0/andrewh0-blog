import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import PostBody from "../../components/postBody";
import PostHeader from "../../components/postHeader";
import Layout from "../../components/layout";
import { getNoteBySlug, getAllNotes } from "../../lib/api";
import PostTitle from "../../components/postTitle";
import NoteType from "../../../types/note";

type Props = {
  note: NoteType;
};

const Note = ({ note }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !note?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article sx={{ height: "100%" }}>
            <Head>
              <title>{note.title} | Andrew Ho</title>
              {/* <meta property="og:image" content={note.ogImage.url} /> */}
            </Head>

            <PostHeader
              title={note.title}
              coverImage={note.coverImage}
              date={note.date}
              author={note.author}
            />
            <PostBody content={note.content} />
          </article>
        </>
      )}
    </Layout>
  );
};

export default Note;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const note = getNoteBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);

  return {
    props: {
      note,
    },
  };
}

export async function getStaticPaths() {
  const notes = getAllNotes(["slug"]);

  return {
    paths: notes.map((note) => {
      return {
        params: {
          slug: note.slug,
        },
      };
    }),
    fallback: false,
  };
}
