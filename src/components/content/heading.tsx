import { Themed } from "@theme-ui/mdx";

const Heading = ({ title }: { title: string }) => {
  return <Themed.h1 sx={{ mb: 5 }}>{title}</Themed.h1>;
};

export default Heading;
