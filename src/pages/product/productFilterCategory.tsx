import { useDispatch, useSelector } from 'react-redux'
import { CategoryListWithIcon } from '../../components/molecules/categoryList'
import ListProduct from '../../components/molecules/product/ListProduct'
import FilterOptions from '../../components/organisms/filter/FilterOptions'
import { AppDispatch, RootState } from '../../redux/store'
import { useLocation, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getFilterProductListThunk, getSpecFilterListThunk } from '../../redux/slice/productSlice'

const ProductFilterBrand = () => {
  const { category } = useParams<{ category?: string }>() ?? {}
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)
  const queryObject: { [key: string]: string } = Object.fromEntries(queryParams.entries())
  const dispatch = useDispatch<AppDispatch>()
  const { listProducts } = useSelector((state: RootState) => state.product)
  const { specFilter } = useSelector((state: RootState) => state.product)

  useEffect(() => {
    if (category) {
      dispatch(getSpecFilterListThunk(category))
      dispatch(
        getFilterProductListThunk({
          category: category,
          query: queryObject
        })
      )
    }
  }, [listProducts])

  // const updatedQueryParams = (newsParams: { [key: string]: string }) => {
  //   const searchParams = new URLSearchParams(location.search)
  //   Object.keys(newsParams).forEach((key) => {
  //     if (newsParams[key]) {
  //       searchParams.set(key, newsParams[key])
  //     } else {
  //       searchParams.delete(key)
  //     }
  //   })
  //   navigate({
  //     search: searchParams.toString()
  //   })
  // }

  return (
    <section>
      <CategoryListWithIcon />
      <div className='flex'>
        <div className='basis-1/4 mr-6'>
          <FilterOptions specFilter={specFilter} />
        </div>
        <div className='basis-3/4'>
          <ListProduct productList={listProducts} className='grid-cols-3' />
        </div>
      </div>
      <div>
        <section className='flex flex-col gap-4 md:flex-row justify-between items-start md:items-center'>
          <div className='flex gap-4'>
            <img src='/assets/icons/service/computer_icon.svg' alt='' />
            <p className='text-xl self-center'>Latest and Greatest Tech</p>
          </div>
          <div className='flex gap-4'>
            <img src='/assets/icons/service/guard_icon.svg' alt='' />
            <p className='text-xl self-center'>Guarantee</p>
          </div>
          <div className='flex gap-4'>
            <img src='/assets/icons/service/shipping_icon.svg' alt='' />
            <p className='text-xl self-center'>Free Shipping over 1000$</p>
          </div>
          <div className='flex gap-4'>
            <img src='/assets/icons/service/time_support_icon.svg' alt='' />
            <p className='text-xl self-center'>24/7 Support</p>
          </div>
        </section>
      </div>
    </section>
  )
}

export default ProductFilterBrand
