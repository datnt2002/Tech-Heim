import { useEffect, useState } from "react";
type Blog = {
  title: string;
  content: string;
  releaseDate: string;
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
      <h1>{blogDetail.title}</h1>
      <p>{blogDetail.releaseDate}</p>
      <p>{blogDetail.readTime}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: blogDetail.content.replace(/\n/g, "<br />"),
        }}
      ></div>
    </div>
  );
};

export default BlogDetail;
