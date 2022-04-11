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
        display: flex;
        flex-direction: column;
        flex: 1;
      `}
    >
      <AboutMarkdown />
    </Box>
  </Layout>
);

export default About;
