import { Box } from "theme-ui";
import ContentContainer from "components/contentContainer";
import Footer from "components/footer";
import Meta from "components/meta";
import Navigation from "components/navigation";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Meta />
    <ContentContainer>
      <Navigation />
      <Box
        css={`
          height: 100%;
        `}
      >
        {children}
      </Box>
      <Footer />
    </ContentContainer>
  </>
);

export default Layout;
