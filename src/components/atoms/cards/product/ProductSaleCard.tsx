import { formatNumber } from '../../../../utils/formatNumber'

import { Skeleton } from 'antd'

type Props = {
  id: number
  image: string
  name: string
  price: number
  percent: number
  loading: boolean
}

const ProductSaleCard = ({
  id,
  name,
  image,
  price,
  percent,
  loading
}: Props) => {
  const newPrice: number = price - (price * percent) / 100

  return (
    <div
      className='relative rounded-md bg-white xl:w-43 lg:w-40 w-full flex flex-col shadow-md group cursor-pointer'
      id={id.toString()}
    >
      {loading ? (
        <div className='flex flex-col gap-2'>
          <Skeleton.Image
            active={loading}
            className=' object-contain w-44 h-36'
          />
          <Skeleton
            paragraph={{ rows: 1 }}
            active={loading}
            className='text-xs'
          />
        </div>
      ) : (
        <div>
          {' '}
          {percent && (
            <p className='absolute top-2 left-0 py-1 px-[6px] text-secondary-400 bg-secondary-100 rounded-tr-xl rounded-br-xl group-hover:hidden'>
              {percent}%
            </p>
          )}
          <div className=' flex flex-col items-center w-full h-full'>
            <img src={image} alt={name} className='object-contain w-44 h-36' />
          </div>
          <div className='pb-2 px-2'>
            <h5 className='text-xs line-clamp-1'>{name}</h5>
            <div className='flex justify-between pt-2'>
              <p className='text-gray-717171 line-through text-xs'>
                ${formatNumber(price)}
              </p>
              <p className='text-sm'>${formatNumber(newPrice)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductSaleCard
