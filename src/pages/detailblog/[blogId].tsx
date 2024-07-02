import { BlogContent, RecentBlog } from "../../components/molecules/detailblog";
import { BlogCategorieslist } from "../../components/molecules/blogcategory";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { useEffect } from "react";
import { getDetailBlogThunk } from "../../redux/slice/blogSlice";

const DetailBlog = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getDetailBlogThunk(id));
  }, [id]);
  const blog;
  return (
    <>
      <div className="flex flex-row  mb-14 gap-6">
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
