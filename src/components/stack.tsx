import Lozenge from "./lozenge";
import { Flex } from "theme-ui";

const frontend = [
  "HTML",
  "CSS",
  "React",
  "Redux",
  "JavaScript",
  "Emotion",
  "Styled Components",
  "Stitches",
  "Theme UI",
  "Radix UI",
  "MDX",
  "React Three Fiber",
  "Three.js",
  "TypeScript",
  "Gulp",
  "Flow",
  "jQuery",
  "React Native",
  "Expo",
  "SwiftUI",
];

const backend = [
  "Django",
  "Celery",
  "Node",
  "Next.js",
  "Express",
  "Firebase",
  "Supabase",
  "Python",
  "Flask",
  "Prisma",
  "sqlite",
];

const deployment = ["Fly.io", "Heroku", "Raspberry Pi", "Vercel", "Netlify"];

function getColor(technology: string) {
  return frontend.includes(technology)
    ? "cyan"
    : backend.includes(technology)
    ? "indigo"
    : deployment.includes(technology)
    ? "plum"
    : "gray";
}

const Stack = ({ technologies }: { technologies: string[] }) => (
  <Flex sx={{ mb: 3, flexWrap: "wrap" }}>
    {technologies.map((technology) => (
      <Lozenge key={technology} color={getColor(technology)}>
        {technology}
      </Lozenge>
    ))}
  </Flex>
);

export default Stack;
