import { useState } from "react";
import { BlogCard } from "../atoms/cards";
import { Pagination } from "antd";

const blogs = [
  {
    content:
      "In this blog post, we explore the different ways to connect your iPhone to a laptop, providing step-by-step instructions for both Windows and macOS users.",
    title: "How to Connect Your iPhone to a Laptop",
    releaseDate: "2023-06-15",
    readTime: "5 min read",
  },
  {
    content:
      "Learn how to fix the Green Screen of Death (GSoD) error in Windows 10 and 11 with our comprehensive guide, including troubleshooting steps and preventive measures.",
    title: "How to Fix Green Screen of Death (GSoD) Error",
    releaseDate: "2023-06-20",
    readTime: "7 min read",
  },
  {
    content:
      "We review the latest iPhone 14 Pro Max, examining its powerful features, impressive performance, and overall value as a flagship smartphone.",
    title: "iPhone 14 Pro Max Review: Still Powerful and Flagship",
    releaseDate: "2023-07-01",
    readTime: "6 min read",
  },
  {
    content:
      "Discover ten things you should never store in your smartphone to protect your privacy and ensure your personal data remains secure.",
    title: "10 Things You Should Never Store in Your Smartphone",
    releaseDate: "2023-07-10",
    readTime: "4 min read",
  },
  {
    content:
      "Discover ten things you should never store in your smartphone to protect your privacy and ensure your personal data remains secure.",
    title: "10 Things You Should Never Store in Your Smartphone",
    releaseDate: "2023-07-10",
    readTime: "4 min read",
  },
  {
    content:
      "Discover ten things you should never store in your smartphone to protect your privacy and ensure your personal data remains secure.",
    title: "10 Things You Should Never Store in Your Smartphone",
    releaseDate: "2023-07-10",
    readTime: "4 min read",
  },
  {
    content:
      "Discover ten things you should never store in your smartphone to protect your privacy and ensure your personal data remains secure.",
    title: "10 Things You Should Never Store in Your Smartphone",
    releaseDate: "2023-07-10",
    readTime: "4 min read",
  },
  // Add more blog entries here if needed
];
const ListRecentBlog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const blogsPerPage = 4;

  // Calculate the blogs to display for the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const onPageChange = (page: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsTransitioning(false);
    }, 300); // Match this duration with your CSS transition duration
  };
  return (
    <div>
      <div className="font-bold text-xl mt-5">Recent Post</div>
      <div
        className={`flex flex-col justify-center gap-3 transition-opacity  w-[75%] duration-300 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        {currentBlogs.map((blog, index) => (
          <BlogCard
            mode="horizontal"
            className=" shadow-md"
            title={blog.title}
            releaseDate={blog.releaseDate}
            readTime={blog.readTime}
            content={blog.content}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Pagination
          current={currentPage}
          pageSize={blogsPerPage}
          total={blogs.length}
          onChange={onPageChange}
        />
      </div>
    </div>
  );
};
export default ListRecentBlog;
