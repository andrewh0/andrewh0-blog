import { Metadata } from "next";
import Layout from "components/layout";
import Heading from "components/content/heading";
import BadgeCard from "./badgeCard/badgeCard";
import SubpageNavigation from "components/subpageNavigation";
import StatusLozengeCard from "./statusLozengeCard/statusLozengeCard";

const Labs = () => (
  <Layout>
    <SubpageNavigation previousPagePath="/" previousPageLabel="Home" />
    <Heading title="Labs" />
    <div className="space-y-4">
      <StatusLozengeCard />
      <BadgeCard />
    </div>
  </Layout>
);

export const metadata: Metadata = {
  title: "Labs · Andrew Ho",
};

export default Labs;
