import { Box } from "theme-ui";
import { Themed } from "@theme-ui/mdx";
import Head from "next/head";
import Layout from "components/layout";
import SubpageNavigation from "components/subpageNavigation";
import dogAndMe from "../../public/andrew-dog.jpg";
import Image from "components/content/image";
import Heading from "components/content/heading";
import Link from "components/content/link";

const About = () => (
  <Layout>
    <Head>
      <title>About &middot; Andrew Ho</title>
    </Head>
    <Box>
      <SubpageNavigation previousPagePath="/" previousPageLabel="Home" />
      <Heading title="About" />
      <Image src={dogAndMe} alt="My dog and me" />
      <Themed.p>
        Hi, I&apos;m Andrew. I&apos;m a software engineer based in the San
        Francisco Bay Area.
      </Themed.p>
      <Themed.p>
        Right now, I&apos;m at{" "}
        <Link href="https://www.nexhealth.com">NexHealth</Link> building
        software to connect patients, doctors, and developers. Before, I was at{" "}
        <Link href="https://landed.com">Landed</Link>,{" "}
        <Link href="https://fig.co">Fig</Link>, and{" "}
        <Link href="https://ebay.com">eBay</Link>.
      </Themed.p>
      <Themed.hr />
      <Themed.p>
        I could not have arrived at where I am today without the support of
        other engineers, teachers, mentors, and the programming community, so my
        personal website is dedicated to sharing what I&apos;ve learned so{" "}
        {/* These non-breaking spaces prevent this from looking like an unordered list on mobile. */}
        far&nbsp;— my knowledge, mistakes, and experiences&nbsp;— to help other
        people build something they&apos;re proud of.
      </Themed.p>
      <Themed.p>
        This website is{" "}
        <Link href="https://github.com/andrewh0/andrewh0-blog">
          open-source
        </Link>{" "}
        and so are many of my <Link href="/projects">projects</Link>. Feel free
        to email me with any questions or reach out elsewhere on the web.
      </Themed.p>
    </Box>
  </Layout>
);

export default About;
