import Markdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'
import { Blog } from '../../../types/Blog'
import ListComment from '../comment/ListComment'
import dayjs from 'dayjs'
type Props = {
  detailBlogPost: Blog | null
}

const BlogContent = ({ detailBlogPost }: Props) => {
  return (
    <div>
      <div className='border-b-2 border-b-gray-717171 pb-4'>
        <div className='mt-4' key={detailBlogPost?.id}>
          <h5 className='font-medium text-xl'>{detailBlogPost?.title}</h5>
          <div className='mt-4 text-xs text-[#717171]'>
            By {detailBlogPost?.author} on{' '}
            {dayjs(detailBlogPost?.releaseDate).format('DD-MM-YYYY')}
          </div>
        </div>
        <div className='mt-4'>
          <img
            src={detailBlogPost?.image}
            className='h-[25.8rem] w-[50.5rem] rounded-lg'
          />
        </div>

        <Markdown
          remarkPlugins={[remarkBreaks]}
          className='prose font-light text-xl mt-4'
        >
          {detailBlogPost?.content}
        </Markdown>
      </div>
      <div className='mt-4 flex flex-col'>
        <div className='font-medium text-xl'>Comment</div>
        <ListComment comments={detailBlogPost?.comment} />
      </div>
    </div>
  )
}

export default BlogContent
