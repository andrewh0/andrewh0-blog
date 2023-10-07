import Head from "next/head";

import Layout from "components/layout";
import { listPosts } from "lib/notion";
import SubpageNavigation from "components/subpageNavigation";
import Heading from "components/content/heading";
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
          <li key={id} className="mb-4 flex items-center justify-between">
            <Link href={`/notes/${slug}`}>{title}</Link>
            <span className="font-mono text-sm text-gray-11">
              {publishedAt}
            </span>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default NotesIndex;
