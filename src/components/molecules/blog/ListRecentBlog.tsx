import { useState } from "react";
import { Pagination } from "antd";
import { BlogCard } from "../../atoms/cards";
import { Blog } from "../../../types/Blog";

type Props = {
  recentBlogList: Blog[];
};
const ListRecentBlog = ({ recentBlogList }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const blogsPerPage = 4;

  // Calculate the blogs to display for the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = recentBlogList.slice(indexOfFirstBlog, indexOfLastBlog);

  const onPageChange = (page: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
    }, 300); // Match this duration with your CSS transition duration
  };

  return (
    <div>
      <div className="font-bold text-xl mt-5 mb-8">Recent Posts</div>
      <div
        className={`flex flex-col gap-4 transition-opacity duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {currentBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            mode="horizontal"
            className="shadow-md"
            title={blog.title}
            releaseDate={blog.releaseDate}
            readTime={blog.readTime}
            content={blog.content}
            author={blog.author}
            image={blog.image}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Pagination
          current={currentPage}
          pageSize={blogsPerPage}
          total={recentBlogList.length}
          onChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default ListRecentBlog;
