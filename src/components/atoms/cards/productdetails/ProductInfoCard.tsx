import { useState } from 'react'
import { Product } from '../../../../types/Product'

type Props = {
  product?: Product | null
}

const ProductInfoCard = ({ product }: Props) => {
  const [showMore, setShowMore] = useState(false)

  const handleShowMore = () => {
    setShowMore(!showMore)
  }
  return (
    <div className='flex flex-col gap-8 w-full' key={product?.id}>
      <div className='flex flex-col gap-6'>
        <div className='font-medium text-xl'>{product?.name}</div>
        <div className='flex flex-row gap-2 lg:border-b-transparent border-b-black'>
          <div className='bg-primary-500 rounded-lg text-white p-1 flex flex-row justify-center w-fit '>
            <img src='/assets/icons/like/white_star.svg' className='p-[2.5] ' />
            <div className='font-medium text-xs content-center'>
              {product?.rating}
            </div>
          </div>
          <img src='/assets/icons/line/line.svg' className='mr-1' />
          <div className='text-xl font-light'>sold 123</div>
        </div>
        <div className='gap-8 flex flex-row content-center w-full'>
          <div className='flex flex-grow items-center'>
            <img src='/assets/icons/policy/shop.svg' alt='In Stock' />
            <div className='text-gray-717171 font-medium text-xs'>In Stock</div>
          </div>
          <div className='flex flex-grow items-center'>
            <img src='/assets/icons/policy/verify.svg' alt='Guaranteed' />
            <div className='text-gray-717171 font-medium text-xs'>
              Guaranteed
            </div>
          </div>
          <div className='flex flex-grow items-center'>
            <img src='/assets/icons/policy/truck.svg' alt='Free Delivery' />
            <div className='text-gray-717171 font-medium text-xs'>
              Free Delivery
            </div>
          </div>
        </div>

        <div className='flex flex-row gap-10'>
          <div className='font-light text-base'>Select Color</div>
        </div>

        <div className='flex flex-col'>
          <table className='table-auto mx-2'>
            {product?.specifications
              .slice(0, showMore ? product.specifications.length : 3)
              .map((spec) => (
                <tr>
                  <td className='font-medium text-sm text-gray-717171'>•</td>
                  <td className='font-medium text-sm text-gray-717171 content-center w-1/2'>
                    {spec.key}
                  </td>
                  <th className='font-medium text-sm text-left w-1/2'>
                    {spec.value}
                  </th>
                </tr>
              ))}
          </table>
          <div className='ml-7 flex flex-row' onClick={handleShowMore}>
            <a className='font-light text-sm text-primary content-end py-1 pl-1'>
              {showMore ? 'Show less' : 'Show more'}
            </a>
            <img src='/assets/icons/arrow/arrow_right_blue_icon.svg' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductInfoCard
