import { BlogContent, RecentBlog } from "../../components/molecules/detailblog";
import { BlogCategorieslist } from "../../components/molecules/blogcategory";

const DetailBlog = () => {
  return (
    <>
      <div className="flex flex-row px-28 mb-14 gap-6">
        <div className="basis-2/3">
          <BlogContent />
        </div>
        <div className="basis-1/3 mt-[4.2rem] flex flex-col">
          <BlogCategorieslist />
          <RecentBlog />
        </div>
      </div>
    </>
  );
};
export default DetailBlog;
