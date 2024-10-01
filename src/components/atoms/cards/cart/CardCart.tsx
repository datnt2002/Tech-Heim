import { Button } from 'antd'

import { formatNumber } from '../../../../utils/formatNumber'
import { cn } from '../../../../utils/utils'
import { CartItem } from '../../../../types/Cart'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../../redux/store'
import {
  deleteCartItemThunk,
  updateQuantityThunk
} from '../../../../redux/slice/cartSlice'

type Props = {
  cartItem: CartItem
  className?: string
}

const CardCart = ({ className, cartItem }: Props) => {
  const dispatch = useDispatch<AppDispatch>()

  const handleDeleteItem = (id: number) => {
    dispatch(deleteCartItemThunk(id))
  }

  const increaseCartItem = (id: number) => {
    const updatedQuantity = cartItem.quantity + 1
    dispatch(updateQuantityThunk({ cartItemID: id, quantity: updatedQuantity }))
  }

  const decreaseCartItem = (id: number) => {
    if (cartItem.quantity > 1) {
      const updatedQuantity = cartItem.quantity - 1
      dispatch(
        updateQuantityThunk({ cartItemID: id, quantity: updatedQuantity })
      )
    } else {
      handleDeleteItem(id)
    }
  }

  return (
    <div className={cn('w-full h-44 bg-gray-F9F9F9', className)}>
      <div className='flex shadow-md rounded-lg overflow-hidden h-full gap-2'>
        <div className='w-2/5 bg-white'>
          <img
            className='object-contain h-full w-full'
            src={cartItem.image}
            alt=''
          />
        </div>

        <div className='px-5 py-2 flex flex-col justify-center w-3/5'>
          <h6 className='font-semibold font-inter text-base line-clamp-2 pb-2'>
            {cartItem.name}
          </h6>
          <p className='text-xs font-inter text-gray-717171 font-light'>
            {cartItem.color}
          </p>
          <p className='text-xs font-inter text-gray-717171 font-light'>
            x{cartItem.quantity}
          </p>
          <div className='mt-3'>
            <p className='text-xs flex gap-1 font-inter text-gray-717171 font-light'>
              <span>
                <img src='/assets/icons/delivery/truck_icon.svg' alt='' />
              </span>
              Free Delivery
            </p>
            <p className='text-xs flex gap-1 font-inter text-gray-717171 font-light'>
              <span>
                <img src='/assets/icons/essential/verify_icon.svg' alt='' />
              </span>
              Guaranteed
            </p>
          </div>
          <div className='flex justify-between items-end'>
            <p className=' font-semibold'>${formatNumber(cartItem.price)}</p>

            <div className='flex'>
              <Button
                type='text'
                className='p-0'
                onClick={() => handleDeleteItem(cartItem.id)}
              >
                <img src='/assets/icons/essential/trash_icon.svg' alt='' />
              </Button>
              <div className='flex items-center space-x-4 border-b border-b-gray-717171 ml-2'>
                <Button
                  type='text'
                  size='small'
                  className='flex items-center justify-center border-none shadow-none '
                  onClick={() => decreaseCartItem(cartItem.id)}
                >
                  -
                </Button>
                <span className='text-sm'>{cartItem.quantity}</span>
                <Button
                  type='text'
                  size='small'
                  className='flex items-center justify-center border-none shadow-none '
                  onClick={() => increaseCartItem(cartItem.id)}
                >
                  +
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardCart
