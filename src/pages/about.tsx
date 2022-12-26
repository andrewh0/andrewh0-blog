import { Box, Themed } from "theme-ui";
import Head from "next/head";
import Layout from "components/layout";
import AboutMarkdown from "markdown/about.mdx";
import SubpageNavigation from "components/subpageNavigation";

const About = () => (
  <Layout>
    <Head>
      <title>About &middot; Andrew Ho</title>
    </Head>
    <Box>
      <SubpageNavigation previousPagePath="/" previousPageLabel="Home" />
      <Themed.h1 sx={{ mb: 5 }}>About</Themed.h1>
      <AboutMarkdown />
    </Box>
  </Layout>
);

export default About;
