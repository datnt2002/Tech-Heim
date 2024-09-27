import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from './slice/authSlice'
import ModalReducer from './slice/modalSlice'
import ProductReducer from './slice/productSlice'
import BlogReducer from './slice/blogSlice'
import OrderReducer from './slice/orderSlice'
import CartReducer from './slice/cartSlice'

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    product: ProductReducer,
    appModal: ModalReducer,
    blog: BlogReducer,
    order: OrderReducer,
    cart: CartReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
