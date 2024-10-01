import {
  addToCartAPI,
  deleteCartAPI,
  deleteCartItemAPI,
  getCartAPI,
  updateQuantityAPI
} from '../../services/cart.service'
import { Cart, CartItem } from '../../types/Cart'
import { createAppSlice } from '../appSlice'

interface CartState {
  loading: boolean
  cart: Cart | null
  cartItem: CartItem | null
  cartItems: CartItem[]
}
const initialState: CartState = {
  loading: true,
  cart: null,
  cartItem: null,
  cartItems: []
}

export const cartSlice = createAppSlice({
  name: 'cart',
  initialState,
  reducers: (create) => ({
    addToCartThunk: create.asyncThunk(
      async (productID: number) => {
        const res = await addToCartAPI(productID)
        return res
      },
      {
        pending: (state) => {
          return {
            ...state,
            loading: false
          }
        },
        fulfilled: (state, action) => {
          const { data, status } = action.payload
          return {
            ...state,
            loading: false,
            cart: data,
            status: status
          }
        },
        rejected: (state) => {
          return {
            ...state,
            loading: false
          }
        }
      }
    ),
    getCartThunk: create.asyncThunk(getCartAPI, {
      pending: (state) => {
        return {
          ...state,
          loading: true
        }
      },
      fulfilled: (state, action) => {
        const { data, status } = action.payload
        return {
          ...state,
          loading: false,
          cart: data,
          status: status
        }
      },
      rejected: (state) => {
        return {
          ...state,
          loading: false
        }
      }
    }),

    deleteCartThunk: create.asyncThunk(deleteCartAPI, {
      pending: (state) => {
        return {
          ...state,
          loading: true
        }
      },
      fulfilled: (state, action) => {
        const { status } = action.payload
        return {
          ...state,
          loading: false,
          status: status
        }
      },
      rejected: (state) => {
        return {
          ...state,
          loading: false
        }
      }
    }),
    deleteCartItemThunk: create.asyncThunk(
      async (cartItemID: number) => {
        const res = deleteCartItemAPI(cartItemID)
        return res
      },
      {
        pending: (state) => {
          return {
            ...state,
            loading: true
          }
        },
        fulfilled: (state, action) => {
          return {
            ...state,
            loading: false,
            cartItems: state.cartItems.filter((item) => {
              return item.id !== action.payload.cartItemID
            })
          }
        },
        rejected: (state) => {
          return {
            ...state,
            loading: false
          }
        }
      }
    ),
    updateQuantityThunk: create.asyncThunk(
      async ({
        cartItemID,
        quantity
      }: {
        cartItemID: number
        quantity: number
      }) => {
        const res = updateQuantityAPI({ cartItemID, quantity })
        return res
      },
      {
        pending: (state) => {
          return {
            ...state,
            loading: true
          }
        },
        fulfilled: (state, action) => {
          const { data, status } = action.payload
          return {
            ...state,
            loading: false,
            cartItems: state.cartItems.map((item) =>
              item.id === data.cartItemID ? data : item
            ),
            status: status
          }
        },
        rejected: (state) => {
          return {
            ...state,
            loading: false
          }
        }
      }
    )
  })
})
export const {
  addToCartThunk,
  getCartThunk,
  deleteCartThunk,
  deleteCartItemThunk,
  updateQuantityThunk
} = cartSlice.actions
export default cartSlice.reducer
