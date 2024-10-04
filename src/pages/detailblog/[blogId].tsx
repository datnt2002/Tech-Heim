import { BlogContent, RecentBlog } from '../../components/molecules/detailblog'
import { BlogCategorieslist } from '../../components/molecules/blogcategory'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { useEffect } from 'react'
import { getBlogDetailThunk } from '../../redux/slice/blogSlice'

const DetailBlog = () => {
  const { id } = useParams<{ id?: string }>() ?? {}
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (id) {
      dispatch(getBlogDetailThunk(Number(id)))
    }
  }, [dispatch, id])

  const { detailBlogPost } = useSelector((state: RootState) => state.blog)

  console.log(id, detailBlogPost)

  return (
    <>
      <div className='flex lg:flex-row flex-col  mb-14 lg:gap-6 gap-2'>
        <div className='lg:basis-2/3  py-4'>
          <BlogContent detailBlogPost={detailBlogPost} />
        </div>
        <div className='lg:basis-1/3 lg:mt-[4.2rem] flex flex-col'>
          <BlogCategorieslist />
          <RecentBlog />
        </div>
      </div>
    </>
  )
}
export default DetailBlog
