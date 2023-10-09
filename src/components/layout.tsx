import Footer from "components/footer";
import Meta from "components/meta";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <Meta />
    <div className="mx-auto my-0 flex h-auto min-h-screen max-w-[672px] flex-col overflow-hidden overscroll-y-none px-4">
      <div className="flex flex-1 flex-col px-2">{children}</div>
      <Footer />
    </div>
  </>
);

export default Layout;
