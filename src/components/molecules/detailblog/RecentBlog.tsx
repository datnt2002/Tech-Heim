import { useSelector } from 'react-redux'

import { RootState } from '../../../redux/store'
import BlogCard from '../../atoms/cards/blog/BlogCard'

const RecentBlog = () => {
  const { listBlogs, loading } = useSelector((state: RootState) => state.blog)
  const limitPost = listBlogs.slice(0, 3)
  return (
    <div>
      <div className='font-medium text-xl mt-5 mb-8'>Recent Posts</div>
      <div className={`flex flex-col gap-4 transition-opacity duration-300`}>
        {limitPost.map((blog) => (
          <BlogCard
            loading={loading}
            key={blog.id}
            id={blog.id}
            mode='horizontal'
            className='shadow-md'
            title={blog.title}
            releaseDate={blog.releaseDate}
            readTime={blog.readTime}
            content={blog.content}
            image={blog.image}
            author={blog.author}
          />
        ))}
      </div>
    </div>
  )
}

export default RecentBlog
