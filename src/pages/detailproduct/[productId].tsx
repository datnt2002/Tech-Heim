import { useParams } from 'react-router-dom'
import PayCard from '../../components/atoms/cards/productdetails/PayCard'
import ProductInfoCard from '../../components/atoms/cards/productdetails/ProductInfoCard'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { useEffect } from 'react'
import ProductTab from '../../components/molecules/productDetail/ProductTab'
import ImagePreview from '../../components/atoms/image/ImagePreview'
import ProductSimilarCarousel from '../../components/molecules/productDetail/ProductSimilarCarousel'
import VideoBlogCarousel from '../../components/molecules/blog/VideoBlogCarousel'
import { getProductDetailThunk } from '../../redux/slice/productSlice'

const product = () => {
  const { id } = useParams<{ id?: string }>() ?? {}
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (id) {
      dispatch(getProductDetailThunk(Number(id)))
      window.scrollTo(0, 0)
    }
  }, [dispatch, id])

  const { product, loading } = useSelector((state: RootState) => state.product)
  const reviewVideo = useSelector(
    (state: RootState) => state.blog.videoBlogsPost
  )

  if (loading) {
  }
  return (
    <div className='flex flex-col gap-8 mb-14'>
      <div className='flex xl:flex-row flex-col gap-8 mb-8'>
        <div className='flex lg:flex-row flex-col gap-6'>
          <div className='xl:basis-3/5 lg:basis-1/2'>
            <ImagePreview
              imageUrl={product?.image || ''}
              // imagePreview={product?.imagePreview || null}
            />
          </div>
          <div className='xl:basis-2/5 lg:basis-1/2'>
            <ProductInfoCard product={product} key={product?.id} />
          </div>
        </div>
        <PayCard
          percent={product?.price?.percent as number}
          price={product?.price?.price as number}
          id={product?.id as number}
        />
      </div>
      <ProductTab />
      <div>
        <ProductSimilarCarousel product={product} />
      </div>
      <div>
        <VideoBlogCarousel videoBlog={reviewVideo} />
      </div>
    </div>
  )
}
export default product
