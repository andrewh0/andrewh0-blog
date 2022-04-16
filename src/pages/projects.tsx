import { Box } from "theme-ui";
import Head from "next/head";
import Layout from "components/layout";
import ProjectMarkdown from "markdown/projects.mdx";
import Lozenge from "components/lozenge";

const Projects = () => {
  return (
    <Layout>
      <Head>
        <title>Projects &middot; Andrew Ho</title>
      </Head>
      <Box sx={{ mt: -5 }}>
        <ProjectMarkdown />
      </Box>
    </Layout>
  );
};

export default Projects;
