import { Box, Link as ThemeLink } from "theme-ui";
import { Themed } from "@theme-ui/mdx";
import Head from "next/head";
import Link, { LinkProps } from "next/link";
import Layout from "components/layout";
import SubpageNavigation from "components/subpageNavigation";
import Heading from "components/content/heading";
import Image from "next/image";
import paleBlueDot from "../../public/pale-blue-dot.jpg";
import { MEDIA_QUERY_DESKTOP_HOVER } from "lib/constants";

const MutedLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} passHref>
      <ThemeLink
        sx={{
          fontSize: 0,
          transition: "color 150ms ease-in-out",
          color: "muted",
          [MEDIA_QUERY_DESKTOP_HOVER]: {
            "&:hover": {
              textDecoration: "none",
              color: "text",
            },
          },
          "&:active": {
            color: "text",
          },
          "&:focus": {
            color: "text",
          },
        }}
      >
        {children}
      </ThemeLink>
    </Link>
  );
};

const PaleBlueDot = () => (
  <Layout>
    <Head>
      <title>A Pale Blue Dot &middot; Carl Sagan</title>
    </Head>
    <Box>
      <SubpageNavigation previousPagePath="/" previousPageLabel="Home" />
      <Heading title="A Pale Blue Dot" />
      {/* TODO: Extend <StyledImage /> to use height, position: relative, and layout props */}
      <Box
        sx={{
          my: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            position: "relative",
            mb: 1,
            aspectRatio: "1 / 1",
          }}
        >
          <Image
            style={{
              borderRadius: "16px",
            }}
            alt="Earth from 4 billion miles away"
            title="Earth from 4 billion miles away"
            layout="fill"
            src={paleBlueDot}
          />
        </Box>
        <MutedLink href="https://www.jpl.nasa.gov/images/pia00452-solar-system-portrait-earth-as-pale-blue-dot">
          NASA / JPL
        </MutedLink>
      </Box>
      <Themed.p>
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
      </Themed.p>
      <Themed.p>
        The Earth is a very small stage in a vast cosmic arena. Think of the
        rivers of blood spilled by all those generals and emperors so that, in
        glory and triumph, they could become the momentary masters of a fraction
        of a dot. Think of the endless cruelties visited by the inhabitants of
        one corner of this pixel on the scarcely distinguishable inhabitants of
        some other corner, how frequent their misunderstandings, how eager they
        are to kill one another, how fervent their hatreds.
      </Themed.p>
      <Themed.p>
        Our posturings, our imagined self-importance, the delusion that we have
        some privileged position in the Universe, are challenged by this point
        of pale light. Our planet is a lonely speck in the great enveloping
        cosmic dark. In our obscurity, in all this vastness, there is no hint
        that help will come from elsewhere to save us from ourselves.
      </Themed.p>
      <Themed.p>
        The Earth is the only world known so far to harbor life. There is
        nowhere else, at least in the near future, to which our species could
        migrate. Visit, yes. Settle, not yet. Like it or not, for the moment the
        Earth is where we make our stand.
      </Themed.p>
      <Themed.p>
        It has been said that astronomy is a humbling and character-building
        experience. There is perhaps no better demonstration of the folly of
        human conceits than this distant image of our tiny world. To me, it
        underscores our responsibility to deal more kindly with one another, and
        to preserve and cherish the pale blue dot, the only home we&apos;ve ever
        known.
      </Themed.p>
      <Themed.p sx={{ textAlign: "right" }}>
        — Carl Sagan,{" "}
        <Themed.a href="https://www.planetary.org/worlds/pale-blue-dot">
          <i>Pale Blue Dot</i>
        </Themed.a>
        , 1994
      </Themed.p>
    </Box>
  </Layout>
);

export default PaleBlueDot;
