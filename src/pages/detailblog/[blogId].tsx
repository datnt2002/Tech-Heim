import { BlogContent, RecentBlog } from "../../components/molecules/detailblog";
import { BlogCategorieslist } from "../../components/molecules/blogcategory";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useEffect } from "react";
import { getDetailBlogThunk } from "../../redux/slice/blogSlice";

const DetailBlog = () => {
  const { id } = useParams<{ id?: string }>() ?? {};
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (id) {
      dispatch(getDetailBlogThunk(id));
    }
  }, [dispatch, id]);
  const detailBlogPost = useSelector(
    (state: RootState) => state.blog.detailBlogPost
  );

  console.log(detailBlogPost);

  return (
    <>
      <div className="flex flex-row  mb-14 gap-6">
        <div className="basis-2/3">
          <BlogContent detailBlogPost={detailBlogPost} />
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
