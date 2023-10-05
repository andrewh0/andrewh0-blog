import { Box } from "theme-ui";
import Head from "next/head";
import Stack from "components/stack";
import ProjectTitle from "components/projectTitle";
import Layout from "components/layout";
import SubpageNavigation from "components/subpageNavigation";
import Heading from "components/content/heading";
import Link from "components/content/link";
import Text from "components/content/text";

const Projects = () => (
  <Layout>
    <Head>
      <title>Projects &middot; Andrew Ho</title>
    </Head>
    <Box>
      <SubpageNavigation previousPagePath="/" previousPageLabel="Home" />
      <Heading title="Projects" />
      <ProjectTitle name="Falling Block Puzzle Game" year={2023} />
      <Text>
        <Link href="https://falling-block-puzzle-game.vercel.app/">
          Website
        </Link>
      </Text>
      <Text>
        I paired with ChatGPT (GPT-4) on making a clone of one of my favorite
        childhood games, Tetris! It took some nudging and back and forth, but
        I&apos;m pretty pleased with how this turned out. I learned a lot about
        how Tetris is implemented and the subtle (but important!) differences
        between versions of the game.
      </Text>
      <Stack
        technologies={[
          "HTML",
          "CSS",
          "JavaScript",
          "Vite",
          "Vercel",
          "ChatGPT",
        ]}
      />
      <ProjectTitle name="Radiant Diamond" year={2023} />
      <Text>
        <Link href="https://radiant-diamond.vercel.app/">Website</Link>
      </Text>
      <Text>
        I saw this{" "}
        <Link href="https://codesandbox.io/s/diamond-refraction-zqrreo">
          amazing demo
        </Link>{" "}
        of refraction in React Three Fiber and had to try it for myself. Works
        best in Safari.
      </Text>
      <Stack technologies={["React", "React Three Fiber", "Vite", "Vercel"]} />
      <ProjectTitle name="Chinese Flashcard App: Web" year={2022} />
      <Text>
        <Link href="https://chinese-app.vercel.app/">Website</Link>
      </Text>
      <Text>
        A web version of my mobile flashcard experiments, built with modern web
        technologies.
      </Text>
      <Stack
        technologies={[
          "React",
          "Stitches",
          "Radix UI",
          "TypeScript",
          "Prisma",
          "Supabase",
          "Next.js",
          "Vercel",
        ]}
      />
      <ProjectTitle name="Personal Website v3" year={2022} />
      <Text>
        <Link href="/">Website</Link>
      </Text>
      <Text>
        The third major iteration of this website, updated with a new technology
        stack to support a personal blog. If you want, you can still view the{" "}
        <Link href="https://andrewh0-v2.vercel.app/">previous version</Link>.
      </Text>
      <Text>
        This is my playground to experiment with new technologies and build
        smaller apps. Check out this <Link href="/stopwatch">stopwatch</Link>{" "}
        and this <Link href="sf">map of restaurants in San Francisco</Link>.
      </Text>
      <Stack
        technologies={[
          "React",
          "Theme UI",
          "MDX",
          "React Three Fiber",
          "Three.js",
          "TypeScript",
          "Next.js",
          "Vercel",
        ]}
      />
      <ProjectTitle name="Custom Discord bot" year={2022} />
      <Text>
        I created a custom Discord bot for the private server I hang out in with
        some of my close friends. It&apos;s highly specific to how we interact
        in the server — mostly inside jokes and silly memes.
      </Text>
      <Text>
        It&apos;s built with Discord&apos;s{" "}
        <Link href="https://discord.com/developers/docs/interactions/application-commands#message-commands">
          Message Command
        </Link>{" "}
        and{" "}
        <Link href="https://discord.com/developers/docs/interactions/application-commands#slash-commands">
          Slash Command
        </Link>{" "}
        APIs.
      </Text>
      <Stack
        technologies={["Node", "Express", "Fly.io", "discord.js", "Airtable"]}
      />
      <ProjectTitle name="Digestif" year={2020} />
      <Text>
        Digestif shows me the most-liked Tweets from people I follow. It makes
        it easy to discover new Tweets or see what&apos;s going on at a glance.
        It started as a web app hosted from my Raspberry Pi, accessible only on
        my home network. Later, I made it post the best Tweets to my Discord
        server once a day.
      </Text>
      <Stack
        technologies={[
          "React",
          "Django",
          "Celery",
          "Next.js",
          "Raspberry Pi",
          "Twitter",
          "Discord",
        ]}
      />
      <ProjectTitle name="OK.css" year={2020} />
      <Text>
        <Link href="https://okcss.netlify.app/">Website</Link> &middot;{" "}
        <Link href="https://github.com/andrewh0/okcss">GitHub</Link>
      </Text>
      <Text>
        OK.css is a classless CSS framework that adds sensible styling defaults
        to your web page. It&apos;s featured in{" "}
        <Link href="https://github.com/dohliam/dropin-minimal-css">
          this collection
        </Link>{" "}
        of minimal stylesheets.
      </Text>
      <Stack technologies={["CSS", "Gulp", "Netlify"]} />
      <ProjectTitle name="Chinese Flashcard App" year={2020} />
      <Text>
        I&apos;ve been learning Chinese, but wanted a more efficient way to
        review new vocabulary words. I{" "}
        <Link href="https://x.com/andrewlho_codes/status/1279829618598412288">
          shared a small prototype
        </Link>{" "}
        of what the frontend could look like in SwiftUI, and made some progress
        building a cross-platform client with React Native. As part of this
        project, I also researched spaced-repetition algorithms and local-first
        apps.
      </Text>
      <Stack technologies={["React Native", "Expo", "SwiftUI", "sqlite"]} />
      <ProjectTitle name="YouTube Silence Skipper" year={2019} />
      <Text>
        <Link href="https://github.com/andrewh0/youtube-skip-silence">
          GitHub
        </Link>
      </Text>
      <Text>
        This is an experimental Chrome extension that shortens silences on
        YouTube, inspired by a similar feature in popular podcast apps. It works
        by sampling the loudness of the video and increasing the playback rate
        when the loudness drops under a pre-defined threshold.
      </Text>
      <Stack technologies={["JavaScript", "Chrome Extension"]} />
      <ProjectTitle name="Tech Talks" year={2019} />
      <Text>
        <Link href="https://watchtechtalks.com">Website</Link> &middot;{" "}
        <Link href="https://github.com/andrewh0/tech-talks">GitHub</Link>
      </Text>{" "}
      <Text>
        Tech Talks was a place to discover and watch conference talks about web
        development. I had collected thousands of talks from a number of
        JavaScript conferences from 2017 through 2019 by looking up their
        associated conference playlists on YouTube. This project is no longer
        being actively developed.
      </Text>
      <Stack
        technologies={[
          "React",
          "Emotion",
          "TypeScript",
          "Firebase",
          "Heroku",
          "Netlify",
          "Algolia",
        ]}
      />
      <ProjectTitle name="Raspberry Pi Kiosk" year={2017} />
      <Text>
        <Link href="https://github.com/andrewh0/kiosk">GitHub</Link>
      </Text>
      <Text>
        I connected my Raspberry Pi to a display that shows the current time,
        news, stocks, and weather. Then I posted about it on{" "}
        <Link href="https://twitter.com/andrewlho_codes/status/1068685640118689792">
          Twitter
        </Link>
        .
      </Text>
      <Stack
        technologies={[
          "React",
          "Styled Components",
          "TypeScript",
          "Node",
          "Express",
          "Raspberry Pi",
        ]}
      />
      <ProjectTitle name="Aurora" year={2017} />
      <Text>
        <Link href="https://aurora-synth.vercel.app">Website</Link> &middot;{" "}
        <Link href="https://github.com/andrewh0/kiosk">GitHub</Link>
      </Text>
      <Text>
        Aurora is web-based synth that can be played with a computer keyboard
        and MIDI keyboard (Chrome only). It was inspired by professional
        software synths like Sylenth1, Massive, and Serum. I wanted to make
        exploring audio synthesis accessible and fun!
      </Text>
      <Stack
        technologies={[
          "React",
          "Redux",
          "Flow",
          "Styled Components",
          "Vercel",
          "Web MIDI API",
          "Tone.js",
        ]}
      />
      <ProjectTitle name="Wi-Fi LED Lamp" year={2015} />
      <Text>
        <Link href="https://vimeo.com/113175895">Video</Link>
      </Text>
      <Text>
        Inspired by the Philips Hue and the LIFX bulbs, I created a lighting
        solution that can be controlled by a web browser and can be customized
        with software.
      </Text>
      <Text>
        Made with{" "}
        <Link href="https://docs.particle.io/datasheets/discontinued/core-datasheet/">
          Spark Core
        </Link>
        ,{" "}
        <Link href="https://www.ikea.com/us/en/p/vidja-floor-lamp-with-led-bulb-white-30416149/">
          IKEA Vidja lamp
        </Link>
        , and{" "}
        <Link href="https://learn.adafruit.com/adafruit-neopixel-uberguide/">
          Neopixel light strip
        </Link>
        .
      </Text>
      <Stack
        technologies={[
          "HTML",
          "CSS",
          "jQuery",
          "Python",
          "Flask",
          "Heroku",
          "C++",
        ]}
      />
      <ProjectTitle name="Algorithmic Music Generator" year={2012} />
      <Text>
        For my final project in my Computers and Music class, I wrote a program
        that generates music based on user input (key, tempo, etc.) and rules
        from classical music theory.
      </Text>
      <Stack technologies={["JavaScript", "Max MSP"]} />
    </Box>
  </Layout>
);

export default Projects;
