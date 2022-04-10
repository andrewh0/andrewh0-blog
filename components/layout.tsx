import { Box } from "theme-ui";
import Footer from "components/Footer";
import Meta from "components/Meta";
import Navigation from "components/Navigation";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Meta />
    <Box
      css={`
        display: flex;
        flex-direction: column;
        max-width: 640px;
        height: 100%;
        min-height: 100vh;
        overflow: hidden;
        overscroll-behavior-y: none;
        margin: auto;
      `}
      p={3}
    >
      <Navigation />
      <Box
        css={`
          height: 100%;
        `}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  </>
);

export default Layout;
