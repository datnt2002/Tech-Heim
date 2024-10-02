import { useSelector } from 'react-redux'
import {
  ListBlogPost,
  ListRecentBlog,
  ListVideoBlog
} from '../../components/molecules/blog'
import { RootState } from '../../redux/store'

ListBlogPost

const Blog = () => {
  const { listBlogs, listvideoBlogsPost, loading } = useSelector(
    (state: RootState) => state.blog
  )
  return (
    <>
      <div className='flex lg:flex-row sm:flex-col gap-6 mt-10 mb-14'>
        <div className='basis-2/3'>
          <ListBlogPost loading={loading} blogList={listBlogs} />
          <div className='mt-12 lg:mr-32 mb-14'>
            <ListRecentBlog loading={loading} recentBlogList={listBlogs} />
          </div>
        </div>
        <div className='basis-1/3'>
          <ListVideoBlog videoBlogList={listvideoBlogsPost} />
        </div>
      </div>
    </>
  )
}
export default Blog
