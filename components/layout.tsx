import { Box } from "theme-ui";
import Footer from "components/Footer";
import Meta from "components/Meta";
import Navigation from "components/Navigation";

type Props = {
  isHomePage?: boolean;
  children: React.ReactNode;
};

const Layout = ({ children, isHomePage = false }: Props) => (
  <>
    <Meta />
    <Box
      css={`
        display: flex;
        flex-direction: column;
        max-width: 640px;
        min-height: 100vh;
        overflow: hidden;
        overscroll-behavior-y: none;
        margin: 0 auto;
      `}
      sx={{
        height: isHomePage ? "100%" : "auto",
      }}
      p={3}
    >
      <Navigation />
      <Box
        css={`
          display: flex;
          flex-direction: column;
          flex: 1;
        `}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  </>
);

export default Layout;
