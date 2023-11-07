import Footer from "components/footer";

// TODO Rename file
type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <div className="mx-auto my-0 flex h-auto min-h-screen max-w-[672px] flex-col overflow-hidden overscroll-y-none px-4">
      <main className="flex flex-1 flex-col px-2">{children}</main>
      <Footer />
    </div>
  </>
);

export default Layout;
