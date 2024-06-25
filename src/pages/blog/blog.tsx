import {
  ListVideoBlog,
  ListBlogPost,
  ListRecentBlog,
} from "../../components/blog";
import Footer from "../../components/molecules/footer";

const Blog = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-4">
        <div className="col-span-3 flex flex-col gap-4">
          <ListBlogPost />

          <ListRecentBlog />
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <ListVideoBlog />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Blog;
