import {
  getBestSellerProductsAPI,
  getNewProductsAPI,
  getProductByBrandAPI,
  getProductByCatAPI,
  getProductDetailAPI,
  getSearchProductsAPI,
  getSpecFilterAPI
} from '../../services/product.service'
import { Product, SpecFilter } from '../../types/Product'
import { createAppSlice } from '../appSlice'

interface ProductState {
  loading: boolean
  listProducts: Product[]
  listNewProducts: Product[]
  listBestSellerProducts: Product[]
  listSearchProducts: Product[]
  product: Product | null
  specFilter: SpecFilter | null
}

const initialState: ProductState = {
  loading: true,
  listProducts: [],
  product: null,
  specFilter: null,
  listNewProducts: [],
  listSearchProducts: [],
  listBestSellerProducts: []
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
    ),
    getNewProductsThunk: create.asyncThunk(getNewProductsAPI, {
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
          listNewProducts: data,
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
    getBestSellerProductsThunk: create.asyncThunk(getBestSellerProductsAPI, {
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
          listBestSellerProducts: data,
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
    getSearchedProductListThunk: create.asyncThunk(
      async (search: string) => {
        const res = await getSearchProductsAPI(search)
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
            listSearchProducts: data,
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
  getSpecFilterThunk,
  getNewProductsThunk,
  getBestSellerProductsThunk,
  getSearchedProductListThunk
} = listProductslice.actions

export default listProductslice.reducer
