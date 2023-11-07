import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import classNames from "classnames";

type Props = {
  content: string;
};

const codeClasses =
  "prose-code:rounded prose-code:bg-gray-3 prose-code:font-medium prose-code:[font-size:87.5%]";

const preClasses = "prose-pre:rounded-2xl";

const imageClasses = "prose-img:rounded-2xl";

const horizontalRuleClasses =
  "prose-hr:mx-auto prose-hr:my-16 prose-hr:w-1/3 prose-hr:border prose-hr:border-t-0 prose-hr:border-gray-6";

const linkClasses =
  "prose-a:no-underline hover:prose-a:underline focus:prose-a:underline active:prose-a:underline";

const blockquoteClasses = classNames(
  "prose-blockquote:not-italic prose-blockquote:relative prose-blockquote:text-gray-11 prose-blockquote:font-normal before:prose-blockquote:absolute before:prose-blockquote:left-0 before:prose-blockquote:w-1 before:prose-blockquote:h-full before:prose-blockquote:rounded before:prose-blockquote:bg-gray-7",
);

const headerClasses = classNames(
  "prose-h1:font-semibold prose-h1:tracking-tight prose-h1:text-2xl",
  "prose-h2:font-semibold prose-h2:tracking-tight prose-h2:text-xl",
  "prose-h3:font-semibold prose-h3:tracking-tight prose-h3:text-lg",
);

const paragraphClasses = classNames("prose-p:leading-6");

const PostBody = ({ content }: Props) => (
  <div
    className={classNames(
      "prose prose-custom max-w-none",
      codeClasses,
      preClasses,
      imageClasses,
      horizontalRuleClasses,
      linkClasses,
      blockquoteClasses,
      headerClasses,
      paragraphClasses,
    )}
  >
    <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
      {content}
    </Markdown>
  </div>
);

export default PostBody;
