import { Box } from "theme-ui";
import Footer from "components/footer";
import Meta from "components/meta";
import Navigation from "components/navigation";

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
        // https://twitter.com/jensimmons/status/1499576041857290244
        min-height: 100dvh;
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
