import { Carousel } from 'antd'
import { Brand } from '../../../types/Product'

type Props = {
  brand: Brand[]
}

const BrandCarousel = ({ brand }: Props) => {
  return (
    <section className=' mb-5'>
      <Carousel
        slidesToShow={6}
        infinite
        className='content-center'
        autoplay
        dots={false}
        responsive={[
          { breakpoint: 2000, settings: { slidesToShow: 7 } },
          { breakpoint: 1024, settings: { slidesToShow: 6 } },
          { breakpoint: 768, settings: { slidesToShow: 5 } },
          { breakpoint: 480, settings: { slidesToShow: 4 } }
        ]}
      >
        {brand.map((item) => (
          <div className='w-full h-20 content-center' key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className='object-contain w-full h-full aspect-square '
            />
          </div>
        ))}
      </Carousel>
    </section>
  )
}

export default BrandCarousel
