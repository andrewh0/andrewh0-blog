import { Metadata } from "next";
import { listPosts } from "lib/notion";
import Layout from "components/layout";
import SubpageNavigation from "components/subpageNavigation";
import Heading from "components/content/heading";
import Link from "components/content/link";

const NotesIndex = async () => {
  const posts = await listPosts();

  return (
    <Layout>
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

export const revalidate = 60; // seconds

export const metadata: Metadata = {
  title: "Notes · Andrew Ho",
};

export default NotesIndex;
