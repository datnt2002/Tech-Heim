import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";
type Blog = {
  title: string;
  content: string;
  releaseDate: string;
  author: string;
  readTime: string;
};

const BlogDetail = () => {
  const [blogDetail, setBlogDetail] = useState<Blog | null>(null);

  useEffect(() => {
    // Đọc bài viết từ local storage
    const blogData = localStorage.getItem("selectedBlog");
    if (blogData) {
      setBlogDetail(JSON.parse(blogData) as Blog);
    }
  }, []);

  if (!blogDetail) {
    return <p>No blog selected</p>;
  }

  return (
    <div className="prose">
      <div className="mt-4">
        <h5>{blogDetail.title}</h5>
        <p className="mt-4">
          By {blogDetail.author} on {blogDetail.releaseDate}
        </p>
      </div>
      <div className="mt-4">
        <img
          src="https://flowbite.com/docs/images/blog/image-1.jpg"
          className="h-[25.8rem] w-[50.5rem] rounded-lg"
        />
      </div>

      <Markdown remarkPlugins={[remarkBreaks]} className="prose prose prose-lg">
        {blogDetail.content}
      </Markdown>
    </div>
  );
};

export default BlogDetail;
