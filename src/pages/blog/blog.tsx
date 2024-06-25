import {
  ListVideoBlog,
  ListBlogPost,
  ListRecentBlog,
} from "../../components/blog";
import Footer from "../../components/molecules/footer";

const Blog = () => {
  return (
    <div className="mt-10 container">
      <div className="flex flex-row justify-center mx-20">
        <div className="flex flex-col">
          <div className="gap-5">
            <ListBlogPost />
          </div>
          <div className="flex flex-col flex-1 gap-6">
            <ListRecentBlog />
          </div>
        </div>
        <div className="w-1/3">
          <ListVideoBlog />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Blog;
