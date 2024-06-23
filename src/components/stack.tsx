import Lozenge from "./lozenge";

const frontend = [
  "HTML",
  "CSS",
  "React",
  "Redux",
  "JavaScript",
  "Emotion",
  "Framer Motion",
  "Styled Components",
  "Stitches",
  "Theme UI",
  "Radix UI",
  "MDX",
  "React Three Fiber",
  "Tailwind CSS",
  "Three.js",
  "TypeScript",
  "Gulp",
  "Vite",
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
  <div className="mb-4 flex flex-wrap">
    {technologies.map((technology) => (
      <Lozenge key={technology} color={getColor(technology)}>
        {technology}
      </Lozenge>
    ))}
  </div>
);

export default Stack;
