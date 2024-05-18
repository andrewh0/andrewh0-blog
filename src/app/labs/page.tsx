import { Metadata } from "next";
import Layout from "components/layout";
import Heading from "components/content/heading";
import BadgeCard from "./badgeCard/badgeCard";
import SubpageNavigation from "components/subpageNavigation";

const Labs = () => (
  <Layout>
    <SubpageNavigation previousPagePath="/" previousPageLabel="Home" />
    <Heading title="Labs" />
    <BadgeCard />
  </Layout>
);

export const metadata: Metadata = {
  title: "Labs · Andrew Ho",
};

export default Labs;
