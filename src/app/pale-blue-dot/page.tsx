import { Metadata } from "next";
import Link from "next/link";
import ContentImage from "components/content/image";
import ContentLink from "components/content/link";
import Layout from "components/layout";
import SubpageNavigation from "components/subpageNavigation";
import Heading from "components/content/heading";
import Text from "components/content/text";

import paleBlueDot from "../../../public/pale-blue-dot.jpg";

// TODO Create link variants
const MutedLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="text-sm text-gray-11 transition hover:text-gray-12 hover:no-underline focus:text-gray-12 active:text-gray-12"
  >
    {children}
  </Link>
);

const PaleBlueDot = () => (
  <Layout>
    <div>
      <SubpageNavigation previousPagePath="/" previousPageLabel="Home" />
      <Heading title="A Pale Blue Dot" />
      <ContentImage
        alt="Earth from 4 billion miles away"
        title="Earth from 4 billion miles away"
        src={paleBlueDot}
        className="aspect-square"
        caption={
          <MutedLink href="https://www.jpl.nasa.gov/images/pia00452-solar-system-portrait-earth-as-pale-blue-dot">
            NASA / JPL
          </MutedLink>
        }
      />
      <Text>
        Look again at that dot. That&apos;s here. That&apos;s home. That&apos;s
        us. On it everyone you love, everyone you know, everyone you ever heard
        of, every human being who ever was, lived out their lives. The aggregate
        of our joy and suffering, thousands of confident religions, ideologies,
        and economic doctrines, every hunter and forager, every hero and coward,
        every creator and destroyer of civilization, every king and peasant,
        every young couple in love, every mother and father, hopeful child,
        inventor and explorer, every teacher of morals, every corrupt
        politician, every &ldquo;superstar,&rdquo; every &ldquo;supreme
        leader,&rdquo; every saint and sinner in the history of our species
        lived there—on a mote of dust suspended in a sunbeam.
      </Text>
      <Text>
        The Earth is a very small stage in a vast cosmic arena. Think of the
        rivers of blood spilled by all those generals and emperors so that, in
        glory and triumph, they could become the momentary masters of a fraction
        of a dot. Think of the endless cruelties visited by the inhabitants of
        one corner of this pixel on the scarcely distinguishable inhabitants of
        some other corner, how frequent their misunderstandings, how eager they
        are to kill one another, how fervent their hatreds.
      </Text>
      <Text>
        Our posturings, our imagined self-importance, the delusion that we have
        some privileged position in the Universe, are challenged by this point
        of pale light. Our planet is a lonely speck in the great enveloping
        cosmic dark. In our obscurity, in all this vastness, there is no hint
        that help will come from elsewhere to save us from ourselves.
      </Text>
      <Text>
        The Earth is the only world known so far to harbor life. There is
        nowhere else, at least in the near future, to which our species could
        migrate. Visit, yes. Settle, not yet. Like it or not, for the moment the
        Earth is where we make our stand.
      </Text>
      <Text>
        It has been said that astronomy is a humbling and character-building
        experience. There is perhaps no better demonstration of the folly of
        human conceits than this distant image of our tiny world. To me, it
        underscores our responsibility to deal more kindly with one another, and
        to preserve and cherish the pale blue dot, the only home we&apos;ve ever
        known.
      </Text>
      <Text className="text-right">
        — Carl Sagan,{" "}
        <ContentLink href="https://www.planetary.org/worlds/pale-blue-dot">
          <i>Pale Blue Dot</i>
        </ContentLink>
        , 1994
      </Text>
    </div>
  </Layout>
);

export const metadata: Metadata = {
  title: "A Pale Blue Dot · Carl Sagan",
};

export default PaleBlueDot;
