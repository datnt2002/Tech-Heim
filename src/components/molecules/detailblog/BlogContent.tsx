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

const BlogContent = () => {
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
    <div>
      <div className="mt-4">
        <h5 className="font-medium text-xl">{blogDetail.title}</h5>
        <div className="mt-4 text-xs text-[#717171]">
          By {blogDetail.author} on {blogDetail.releaseDate}
        </div>
      </div>
      <div className="mt-4">
        <img
          src="https://flowbite.com/docs/images/blog/image-1.jpg"
          className="h-[25.8rem] w-[50.5rem] rounded-lg"
        />
      </div>

      <Markdown
        remarkPlugins={[remarkBreaks]}
        className="prose font-light text-xl mt-4"
      >
        {blogDetail.content}
      </Markdown>
    </div>
  );
};

export default BlogContent;
