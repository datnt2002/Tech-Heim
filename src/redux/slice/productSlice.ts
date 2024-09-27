import {
  getProductByBrandAPI,
  getProductByCatAPI,
  getProductDetailAPI,
  getSpecFilterAPI
} from '../../services/product.service'
import { Product, SpecFilter } from '../../types/Product'
import { createAppSlice } from '../appSlice'

interface ProductState {
  loading: boolean
  listProducts: Product[]
  product: Product | null
  specFilter: SpecFilter | null
}

const initialState: ProductState = {
  loading: true,
  listProducts: [],
  product: null,
  specFilter: null
}

export const listProductslice = createAppSlice({
  name: 'product',
  initialState,
  reducers: (create) => ({
    getFilterProductThunk: create.asyncThunk(
      async ({
        category,
        query
      }: {
        category: string
        query: { [key: string]: string }
      }) => {
        const res = await getProductByCatAPI({ category, query })
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
            listProducts: data,
            status: status
          }
        }
      }
    ),
    getProductByBrandThunk: create.asyncThunk(
      async (brand: string) => {
        const res = getProductByBrandAPI(brand)
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
            listProducts: data,
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
    getProductDetailThunk: create.asyncThunk(
      async (productID: number) => {
        const res = await getProductDetailAPI(productID)
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
            product: data,
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
    getSpecFilterThunk: create.asyncThunk(
      async (category: string) => {
        const res = await getSpecFilterAPI(category)
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
            specFilter: data,
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
      }
    )
  })
})

export const {
  getFilterProductThunk,
  getProductByBrandThunk,
  getProductDetailThunk,
  getSpecFilterThunk
} = listProductslice.actions

export default listProductslice.reducer
