import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import { Blog } from "../../../types/Blog";
type Props = {
  detailBlogPost: Blog;
};

const BlogContent = ({
  detailBlogPost,
}: // readTime,
Props) => {
  return (
    <div>
      <div className="mt-4" key={detailBlogPost.id}>
        <h5 className="font-medium text-xl">{detailBlogPost.title}</h5>
        <div className="mt-4 text-xs text-[#717171]">
          By {detailBlogPost.author} on {detailBlogPost.releaseDate}
        </div>
      </div>
      <div className="mt-4">
        <img
          src={detailBlogPost.image}
          className="h-[25.8rem] w-[50.5rem] rounded-lg"
        />
      </div>

      <Markdown
        remarkPlugins={[remarkBreaks]}
        className="prose font-light text-xl mt-4"
      >
        {detailBlogPost.content}
      </Markdown>
    </div>
  );
};

export default BlogContent;
