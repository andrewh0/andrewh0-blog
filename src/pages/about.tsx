import { Box } from "theme-ui";
import Head from "next/head";
import Layout from "components/layout";
import AboutMarkdown from "markdown/about.mdx";

const About = () => (
  <Layout>
    <Head>
      <title>About | Andrew Ho</title>
    </Head>
    <Box
      sx={{
        mt: -5,
      }}
    >
      <AboutMarkdown />
    </Box>
  </Layout>
);

export default About;
