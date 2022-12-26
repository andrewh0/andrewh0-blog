import { Box, Themed } from "theme-ui";
import Head from "next/head";
import Layout from "components/layout";
import ProjectMarkdown from "markdown/projects.mdx";
import SubpageNavigation from "components/subpageNavigation";

const Projects = () => {
  return (
    <Layout>
      <Head>
        <title>Projects &middot; Andrew Ho</title>
      </Head>
      <Box>
        <SubpageNavigation previousPagePath="/" previousPageLabel="Home" />
        <Themed.h1 sx={{ mb: 5 }}>Projects</Themed.h1>
        <ProjectMarkdown />
      </Box>
    </Layout>
  );
};

export default Projects;
