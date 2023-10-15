import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => (
  <div className="prose dark:prose-invert">
    <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
      {content}
    </Markdown>
  </div>
);

export default PostBody;
