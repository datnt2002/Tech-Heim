import { BlogCard } from "../atoms/cards";

const blogs = [
  {
    content:
      "In this blog post, we explore the different ways to connect your iPhone to a laptop, providing step-by-step instructions for both Windows and macOS users.",
    title: "How to Connect Your iPhone to a Laptop",
    releaseDate: "2023-06-15",
    readTime: "5 min read",
    author: "Geaorge larens",
  },
  {
    content:
      "In this blog post, we explore the different ways to connect your iPhone to a laptop, providing step-by-step instructions for both Windows and macOS users.",
    title: "How to Connect Your iPhone to a Laptop",
    releaseDate: "2023-06-15",
    readTime: "5 min read",
    author: "Geaorge larens",
  },
  {
    content:
      "Learn how to fix the Green Screen of Death (GSoD) error in Windows 10 and 11 with our comprehensive guide, including troubleshooting steps and preventive measures.",
    title: "How to Fix Green Screen of Death (GSoD) Error in Windows 10 and 11",
    releaseDate: "2023-06-20",
    readTime: "7 min read",
    author: "Geaorge larens",
  },

  // Add more blog entries here if needed
];
const RecentBlog = () => {
  return (
    <div>
      <div className="font-medium text-xl mt-5 mb-8">Recent Posts</div>
      <div className={`flex flex-col gap-4 transition-opacity duration-300`}>
        {blogs.map((blog, index) => (
          <BlogCard
            key={index}
            mode="horizontal"
            className="shadow-md"
            title={blog.title}
            releaseDate={blog.releaseDate}
            readTime={blog.readTime}
            content={blog.content}
            author={blog.author}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentBlog;
