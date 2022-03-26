import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import Link from "next/link";
import Post from "../../types/post";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Andrew Ho</title>
        </Head>
        <ul>
          {allPosts.map(({ title, slug }, i) => (
            <li key={i}>
              <Link as={`/posts/${slug}`} href="/posts/[slug]">
                <a className="hover:underline">{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Layout>
    </>
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
