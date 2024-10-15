import { useState } from 'react'
import CommentFooter from './CommentFooter'

type Props = {
  comment: Comment
}

const CommentCard: React.FC<Props> = ({ comment }) => {
  const [showMore, setShowMore] = useState(false)

  const handleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <div className='rounded-lg bg-gray-F9F9F9 p-3 border-inherit  flex flex-col gap-3'>
      <CommentFooter
        key={comment.id}
        user={comment.user}
        userImage={comment.userImage}
        rating={comment.rating}
        date={comment.date}
      />
      <div className='flex flex-col gap-2'>
        <div className={showMore ? '' : 'line-clamp-2'}>{comment.content}</div>
        <div
          onClick={handleShowMore}
          className='text-primary text-sm font-light flex flex-row cursor-pointer place-content-end'
        >
          <div>{showMore}</div>
          {showMore ? 'Show less' : 'Show more'}
          <img
            src='/assets/icons/arrow/arrow_down_blue_icon.svg'
            className={`transform transition-transform duration-300 ${
              showMore ? 'rotate-180' : ''
            }`}
          />
        </div>
      </div>
    </div>
  )
}
export default CommentCard
