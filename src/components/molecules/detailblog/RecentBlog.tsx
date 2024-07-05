import { useSelector } from "react-redux";

import { RootState } from "../../../redux/store";
import BlogCard from "../../atoms/cards/BlogCard";

const RecentBlog = () => {
  const blogsPost = useSelector((state: RootState) => state.blog.blogsPost);
  const limitPost = blogsPost.slice(0, 3);
  return (
    <div>
      <div className="font-medium text-xl mt-5 mb-8">Recent Posts</div>
      <div className={`flex flex-col gap-4 transition-opacity duration-300`}>
        {limitPost.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            mode="horizontal"
            className="shadow-md"
            title={blog.title}
            releaseDate={blog.releaseDate}
            readTime={blog.readTime}
            content={blog.content}
            image={blog.image}
            author={blog.author}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentBlog;
