import { VideoBlog } from '../../../types/Blog'
import VideoCard from '../../atoms/cards/blog/VideoCard'
import CarouselWithButton from '../../atoms/carousel/CarouselWithButton'

type Props = {
  videoBlog: VideoBlog[]
}

const VideoBlogCarousel = ({ videoBlog }: Props) => {
  return (
    <div>
      <div className='text-xl font-medium mb-8'>Reviews</div>
      <CarouselWithButton slideToShow={4} className='px-6 w-full'>
        {videoBlog.map((blog) => {
          return (
            <VideoCard
              key={blog.id}
              id={blog.id.toString()}
              image={blog.image}
              title={blog.title}
              url={blog.url}
            />
          )
        })}
      </CarouselWithButton>
    </div>
  )
}
export default VideoBlogCarousel
