import { useSelector } from "react-redux";
import {
  ListBlogPost,
  ListRecentBlog,
  ListVideoBlog,
} from "../../components/molecules/blog";
import { RootState } from "../../redux/store";

ListBlogPost;

const Blog = () => {
  const { blogsPost, videoBlogsPost } = useSelector(
    (state: RootState) => state.blog
  );
  return (
    <>
      <div className="flex gap-6  mt-10 mb-14">
        <div className="basis-2/3">
          <ListBlogPost blogList={blogsPost} />
          <div className="mt-12 mr-32 mb-14">
            <ListRecentBlog recentBlogList={blogsPost} />
          </div>
        </div>
        <div className="basis-1/3">
          <ListVideoBlog videoBlogList={videoBlogsPost} />
        </div>
      </div>
    </>
  );
};
export default Blog;
