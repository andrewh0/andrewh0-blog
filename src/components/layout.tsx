import { Box } from "theme-ui";
import Footer from "components/footer";
import Meta from "components/meta";

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
        max-width: 672px;
        min-height: 100vh;
        // https://twitter.com/jensimmons/status/1499576041857290244
        min-height: 100dvh;
        overflow: hidden;
        overscroll-behavior-y: none;
        margin: 0 auto;
        height: auto;
      `}
      px={3}
    >
      <Box
        css={`
          display: flex;
          flex-direction: column;
          flex: 1;
        `}
        px={2}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  </>
);

export default Layout;
