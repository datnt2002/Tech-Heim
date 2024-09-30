import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../../redux/store'

import HeartTag from '../../Tag/HeartTag'
import ProductCardFooter from './ProductCardFooter'

import { User } from '../../../../types/User'
import { PriceTag } from '../../../../types/Product'
import { v4 as uuidv4 } from 'uuid'
import {} from '../../../../redux/slice/orderSlice'

type Props = {
  id: number
  name: string
  image: string
  price: PriceTag
  color?: string
  rating: number
}

const ProductCard = ({ id, image, color, name, price, rating }: Props) => {
  const nav = useNavigate()
  const dispatch = useDispatch<AppDispatch>()

  const handleClick = () => {
    nav(`/products/${id}`)
  }

  const handleAddToCart = async () => {
    const userID = localStorage.getItem('token')
    if (userID) {
    }
  }

  const salePrice: number =
    (price.price * (100 - (price.percent as number))) / 100

  return (
    <div
      className='relative rounded-md bg-white  sm:w-full
     md:w-full lg:w-full xl:w-72 h-auto flex flex-col gap-3 shadow-md group hover:shadow-lg cursor-pointer p-4 '
    >
      <>
        {price.percent && (
          <p className='absolute top-2 left-0 py-1 px-[6px] text-secondary-400 bg-secondary-100 rounded-tr-xl rounded-br-xl group-hover:hidden'>
            {price.percent}%
          </p>
        )}

        <div
          className='flex justify-center items-center w-full h-40 md:h-32 lg:h-48'
          onClick={handleClick}
        >
          <img
            src={image}
            alt={name}
            className='object-contain w-full h-full p-2'
          />
        </div>
        <div className='gradient-black mx-2'></div>
        <div className='flex-1 flex flex-col justify-between pb-2 px-2'>
          <div className='pb-2 group-hover:text-primary text-sm sm:text-base lg:text-lg max-h-fit truncate '>
            {name}
          </div>
          <div className='static h-[30px] content-end'>
            <ProductCardFooter
              price={price.price}
              salePrice={salePrice}
              rating={rating}
              onClick={handleAddToCart}
            />
          </div>
        </div>
      </>
    </div>
  )
}

export default ProductCard
