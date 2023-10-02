import MDX from "@mdx-js/runtime";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => (
  <div className="prose dark:prose-invert">
    <MDX>{content}</MDX>
  </div>
);

export default PostBody;
