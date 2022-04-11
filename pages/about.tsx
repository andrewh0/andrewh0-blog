import { Box } from "theme-ui";
import Head from "next/head";
import Layout from "components/Layout";
import AboutMarkdown from "markdown/about.mdx";

const About = () => (
  <Layout>
    <Head>
      <title>About | Andrew Ho</title>
    </Head>
    <Box
      css={`
        height: 100%;
      `}
    >
      <AboutMarkdown />
    </Box>
  </Layout>
);

export default About;
