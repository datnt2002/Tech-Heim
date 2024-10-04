import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../../redux/store'
import CarouselWithButton from '../../atoms/carousel/CarouselWithButton'
import ProductCard from '../../atoms/cards/product/ProductCard'
import { PriceTag, Product } from '../../../types/Product'
import ProductCardSKE from '../skeleton/ProductCardSKE'
import { getBestSellerProductListThunk } from '../../../redux/slice/productSlice'

type Props = {
  product?: Product | null
}

const ProductSimilarCarousel = ({ product }: Props) => {
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    if (product) dispatch(getBestSellerProductListThunk())
  }, [dispatch])
  const { listBestSellerProducts, loading } = useSelector((state: RootState) => state.product)

  if (loading) {
    ;<div className='grid grid-cols-4'>
      {Array(4).map((_, index) => (
        <ProductCardSKE key={index} />
      ))}
    </div>
  }
  return (
    <div>
      <div className='font-medium text-xl mb-8'>Similar Product</div>
      <CarouselWithButton slideToShow={4}>
        {listBestSellerProducts?.map((product) => {
          return (
            <ProductCard
              color={product.color}
              key={product.id}
              name={product.name}
              id={product.id}
              image={product.image}
              price={product.price as PriceTag}
              rating={product.rating as number}
            />
          )
        })}
      </CarouselWithButton>
    </div>
  )
}
export default ProductSimilarCarousel
