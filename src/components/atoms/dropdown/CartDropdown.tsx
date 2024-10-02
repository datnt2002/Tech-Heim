import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Dropdown } from 'antd'

import { AppDispatch, RootState } from '../../../redux/store'

import { formatNumber } from '../../../utils/formatNumber'
import CardCart from '../cards/cart/CardCart'
import { getCartThunk } from '../../../redux/slice/cartSlice'

const CartDropdown = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const { cart } = useSelector((state: RootState) => state.cart)
  const { isLoggedIn } = useSelector((state: RootState) => state.auth)
  const cartItems = cart?.cartItems

  const filterCartItems = cartItems?.filter((item) => {
    return item.quantity > 0
  })

  const total = filterCartItems?.reduce((res, curr) => {
    return res + curr.price * curr.quantity
  }, 0)

  useEffect(() => {
    if (isLoggedIn) dispatch(getCartThunk())
  }, [])

  return (
    <Dropdown
      className='bg-transparent'
      dropdownRender={() => {
        return (
          <div className='mt-[31px] border rounded-b-lg max-w-2xl flex flex-col bg-white'>
            <p className='pt-6 pl-6 text-lg pb-3'>
              {filterCartItems?.length} items
            </p>
            <div className='max-h-[35rem] w-[28rem] flex flex-col gap-3 mx-8 overflow-y-auto'>
              {filterCartItems?.map((item) => {
                return <CardCart cartItem={item} />
              })}
            </div>

            <div className='flex justify-between px-6 pb-6 pt-2'>
              <div className='flex flex-col justify-center mr-8 font-inter text-center'>
                <p className='text-sm text-gray-2D2D2D font-light'>
                  Grand total
                </p>
                <h6 className='font-bold'>${formatNumber(total)}</h6>
              </div>

              <Button
                size='large'
                className='flex-1'
                type='primary'
                onClick={() => navigate('/cart')}
              >
                Proceed to Cart
                <span>
                  <img
                    src='/assets/icons/shopping/shopping_cart_icon.svg'
                    alt=''
                  />
                </span>
              </Button>
            </div>
          </div>
        )
      }}
      placement='bottomRight'
    >
      <Button
        className='border-none shadow-none'
        icon={
          <img
            className=''
            src='/assets/icons/shopping/bag_icon.svg'
            alt='user_icon'
          />
        }
      />
    </Dropdown>
  )
}

export default CartDropdown
