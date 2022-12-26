import MDX from "@mdx-js/runtime";
import { useThemedStylesWithMdx } from "@theme-ui/mdx";
import { Box } from "theme-ui";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  const componentsWithStyles = useThemedStylesWithMdx(null);
  return (
    // This allows margins to collapse. Otherwise the parent is display: flex.
    <Box sx={{ display: "block" }}>
      <MDX components={componentsWithStyles}>{content}</MDX>
    </Box>
  );
};

export default PostBody;
