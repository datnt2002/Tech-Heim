import {
  ListVideoBlog,
  ListBlogPost,
  ListRecentBlog,
} from "../../components/blog";

const Blog = () => {
  return (
    <>
      <div className="flex gap-6 px-28 mt-24 mb-14">
        <div className="basis-2/3">
          <ListBlogPost />
          <div className="mt-12 mr-32 mb-14">
            <ListRecentBlog />
          </div>
        </div>
        <div className="basis-1/3">
          <ListVideoBlog />
        </div>
      </div>
    </>
  );
};
export default Blog;
