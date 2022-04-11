// import PostTitle from "./postTitle";
import Author from "types/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, date }: Props) => {
  return (
    <>
      {/* <PostTitle>{title}</PostTitle> */}
      <div className="max-w-2xl mx-auto">
        {/* <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div> */}
      </div>
    </>
  );
};

export default PostHeader;
