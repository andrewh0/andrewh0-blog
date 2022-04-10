import Head from "next/head";
import Layout from "components/Layout";
import AboutMarkdown from "markdown/about.mdx";

const About = () => (
  <Layout>
    <Head>
      <title>About | Andrew Ho</title>
    </Head>
    <AboutMarkdown />
  </Layout>
);

export default About;
