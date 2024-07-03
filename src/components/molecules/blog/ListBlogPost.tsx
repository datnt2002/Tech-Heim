import { Blog } from "../../../types/Blog";
import BlogCard from "../../atoms/cards/BlogCard";

type Props = {
  blogList: Blog[];
};

const ListBlogPost = ({ blogList }: Props) => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        {blogList.slice(0, 4).map((blog) => (
          <BlogCard
            className="col-span-6 min-w-full"
            key={blog.id}
            id={blog.id}
            title={blog.title}
            releaseDate={blog.releaseDate}
            readTime={blog.readTime}
            content={blog.content}
            author={blog.author}
            image={blog.image}
          />
        ))}
      </div>
    </>
  );
};
export default ListBlogPost;
