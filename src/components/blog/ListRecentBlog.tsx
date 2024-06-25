import { BlogCard } from "../atoms/cards";

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
    title: "How to Fix Green Screen of Death (GSoD) Error in Windows 10 and 11",
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
  return (
    <div className="flex flex-col">
      <div className="font-bold text-xl">Recent Post</div>
      <div className=" flex flex-col gap-3">
        {blogs.map((blog, index) => (
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
    </div>
  );
};
export default ListRecentBlog;
