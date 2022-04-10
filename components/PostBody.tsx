import MDX from "@mdx-js/runtime";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return <MDX>{content}</MDX>;
};

export default PostBody;
