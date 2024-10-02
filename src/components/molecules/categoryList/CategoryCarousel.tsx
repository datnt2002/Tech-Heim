import { useSelector } from 'react-redux'

import ImgAndNameCard from '../../atoms/cards/ImgAndNameCard'
import CarouselWithButton from '../../atoms/carousel/CarouselWithButton'

import { RootState } from '../../../redux/store'

const CategoryCarousel = () => {
  const { listCategory } = useSelector((state: RootState) => state.product)

  return (
    <section className='py-6 md:py-12 my-3'>
      <CarouselWithButton slideToShow={6}>
        {listCategory?.map((item) => {
          return (
            <ImgAndNameCard
              key={item.id}
              name={item.categoryName}
              img={item.image}
              className='my-3'
            />
          )
        })}
      </CarouselWithButton>
    </section>
  )
}

export default CategoryCarousel
