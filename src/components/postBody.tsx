import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import classNames from "classnames";

type Props = {
  content: string;
};

const codeClasses =
  "prose-code:rounded-sm prose-code:bg-gray-3 prose-code:font-medium prose-code:[font-size:85%]";

const preClasses = "prose-pre:rounded-2xl";

const imageClasses = "prose-img:rounded-2xl";

const horizontalRuleClasses =
  "prose-hr:mx-auto prose-hr:my-16 prose-hr:w-1/3 prose-hr:border prose-hr:border-t-0 prose-hr:border-gray-6";

const linkClasses =
  "prose-a:no-underline prose-a:hover:underline prose-a:focus:underline prose-a:active:underline";

const blockquoteClasses = classNames(
  "prose-blockquote:not-italic prose-blockquote:relative prose-blockquote:text-gray-11 prose-blockquote:font-normal prose-blockquote:before:absolute prose-blockquote:before:left-0 prose-blockquote:before:w-1 prose-blockquote:before:h-full prose-blockquote:before:rounded-sm prose-blockquote:before:bg-gray-7",
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
