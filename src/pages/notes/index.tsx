import Head from "next/head";
import Link from "next/link";

import Layout from "components/layout";

type Props = {
  allNotes: any[];
};

const Index = ({ allNotes = [] }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Andrew Ho</title>
        </Head>
        <ul>
          {allNotes.map(({ title, slug }, i) => (
            <li key={i}>
              <Link as={`/notes/${slug}`} href="/notes/[slug]">
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
