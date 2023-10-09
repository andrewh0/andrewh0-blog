import dynamic from "next/dynamic";
import Head from "next/head";
import classNames from "classnames";

import Layout from "components/layout";
import Navigation from "components/navigation";
import { useIsClientDarkMode } from "lib/hooks";

const Placeholder = () => {
  // Prevent flash in dark mode
  const isDarkMode = useIsClientDarkMode();

  return (
    <div
      className={classNames(
        "relative flex h-full max-h-[640px] w-full rounded-2xl",
        {
          "bg-none": isDarkMode === null,
          "bg-gray-2": isDarkMode !== null,
        },
      )}
    />
  );
};

const BubbleArt = dynamic(() => import("components/bubbles/Container"), {
  ssr: false,
  loading: Placeholder,
});

const Index = () => (
  <Layout>
    <Head>
      <title>Andrew Ho</title>
    </Head>
    <Navigation />
    <BubbleArt />
  </Layout>
);

export default Index;
