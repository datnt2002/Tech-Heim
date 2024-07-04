import {
  Brand,
  Product,
  ProductCategory,
  ProductInCart,
} from "../../types/Product";
import {
  deleteCartItemsAPI,
  getBestSellerProductsAPI,
  getBrandAPI,
  getCartItemsAPI,
  getCategoryAPI,
  getFilterProductAPI,
  getNewProductsAPI,
  getProductSaleAPI,
  getSearchKeywordAPI,
  mostProductSearchedAPI,
  searchProductAPI,
  toggleLikeProductAPI,
  updateQuantityCartItemsAPI,
} from "../../services/product.service";
import { createAppSlice } from "../appSlice";

interface ProductState {
  categories: ProductCategory[];
  cartItems: ProductInCart[];
  searchItems: Product[];
  defaultSearchItems: Product[];
  searchKeywords: { id: string; title: string }[];
  productSale: Product[];
  newProducts: Product[];
  bestSellers: Product[];
  brandList: Brand[];
  filterProduct: Product[];
  loading: boolean;
  status: number;
}

const initialState: ProductState = {
  categories: [],
  cartItems: [],
  searchItems: [],
  defaultSearchItems: [],
  searchKeywords: [],
  productSale: [],
  newProducts: [],
  bestSellers: [],
  brandList: [],
  filterProduct: [],
  loading: false,
  status: 0,
};

export const productSlice = createAppSlice({
  name: "product",
  initialState,
  reducers: (create) => ({
    getCategoryThunk: create.asyncThunk(getCategoryAPI, {
      pending: (state) => {
        return {
          ...state,
          loading: true,
        };
      },
      fulfilled: (state, action) => {
        const { data, status } = action.payload;
        return {
          ...state,
          loading: false,
          categories: data,
          status: status,
        };
      },
      rejected: (state) => {
        return {
          ...state,
          loading: false,
        };
      },
    }),
    getCartItemThunk: create.asyncThunk(getCartItemsAPI, {
      pending: (state) => {
        return {
          ...state,
          loading: true,
        };
      },
      fulfilled: (state, action) => {
        const { data, status } = action.payload;
        return {
          ...state,
          loading: false,
          cartItems: data.filter((item: ProductInCart) => {
            return item.quantity > 0;
          }),
          status: status,
        };
      },
      rejected: (state) => {
        return {
          ...state,
          loading: false,
        };
      },
    }),
    updateQuantityCartItemThunk: create.asyncThunk(
      async ({ id, quantity }: { id: string; quantity: number }) => {
        const res = await updateQuantityCartItemsAPI({ id, quantity });
        return res;
      },
      {
        pending: (state) => {
          return {
            ...state,
            loading: true,
          };
        },
        fulfilled: (state, action) => {
          const { data, status } = action.payload;
          return {
            ...state,
            loading: false,
            cartItems: state.cartItems.map((item) =>
              item.id === data.id ? data : item
            ),
            status: status,
          };
        },
        rejected: (state) => {
          return {
            ...state,
            loading: false,
          };
        },
      }
    ),
    deleteCartItemThunk: create.asyncThunk(
      async (id: string) => {
        const res = await deleteCartItemsAPI(id);
        return { res, id };
      },
      {
        pending: (state) => {
          return {
            ...state,
            loading: true,
          };
        },
        fulfilled: (state, action) => {
          return {
            ...state,
            loading: false,
            cartItems: state.cartItems.filter((item) => {
              return item.id !== action.payload?.id;
            }),
          };
        },
        rejected: (state) => {
          return {
            ...state,
            loading: false,
          };
        },
      }
    ),
    getItemMostSearchedThunk: create.asyncThunk(mostProductSearchedAPI, {
      pending: (state) => {
        return {
          ...state,
          loading: true,
        };
      },
      fulfilled: (state, action) => {
        const { data, status } = action.payload;
        return {
          ...state,
          loading: false,
          defaultSearchItems: data,
          status: status,
        };
      },
      rejected: (state) => {
        return {
          ...state,
          loading: false,
        };
      },
    }),
    getSearchKeywordThunk: create.asyncThunk(getSearchKeywordAPI, {
      pending: (state) => {
        return {
          ...state,
          loading: true,
        };
      },
      fulfilled: (state, action) => {
        const { data, status } = action.payload;
        return {
          ...state,
          loading: false,
          searchKeywords: data,
          status: status,
        };
      },
      rejected: (state) => {
        return {
          ...state,
          loading: false,
        };
      },
    }),
    searchProductThunk: create.asyncThunk(
      async (searchValue: string) => {
        const res = await searchProductAPI(searchValue);
        return res;
      },
      {
        pending: (state) => {
          return {
            ...state,
            loading: true,
          };
        },
        fulfilled: (state, action) => {
          const { data, status } = action.payload;
          return {
            ...state,
            loading: false,
            searchItems: data,
            status: status,
          };
        },
        rejected: (state) => {
          return {
            ...state,
            loading: false,
          };
        },
      }
    ),
    getProductSaleThunk: create.asyncThunk(getProductSaleAPI, {
      pending: (state) => {
        return {
          ...state,
          loading: true,
        };
      },
      fulfilled: (state, action) => {
        const { data, status } = action.payload;
        return {
          ...state,
          loading: false,
          productSale: data,
          status: status,
        };
      },
      rejected: (state) => {
        return {
          ...state,
          loading: false,
        };
      },
    }),
    toggleLikeProductThunk: create.asyncThunk(
      async ({ id, favorite }: { id: string; favorite: boolean }) => {
        const res = await toggleLikeProductAPI({ id, favorite });
        return res;
      },
      {
        pending: (state) => {
          return {
            ...state,
            loading: true,
          };
        },
        fulfilled: (state, action) => {
          const { data, status } = action.payload;
          return {
            ...state,
            loading: false,
            productSale: state.productSale.map((item) =>
              item.id === data.id ? data : item
            ),
            newProducts: state.newProducts.map((item) =>
              item.id === data.id ? data : item
            ),
            bestSellers: state.bestSellers.map((item) =>
              item.id === data.id ? data : item
            ),
            status: status,
          };
        },
        rejected: (state) => {
          return {
            ...state,
            loading: false,
          };
        },
      }
    ),
    getNewProductThunk: create.asyncThunk(getNewProductsAPI, {
      pending: (state) => {
        return {
          ...state,
          loading: true,
        };
      },
      fulfilled: (state, action) => {
        const { data, status } = action.payload;
        return {
          ...state,
          loading: false,
          newProducts: data,
          status: status,
        };
      },
      rejected: (state) => {
        return {
          ...state,
          loading: false,
        };
      },
    }),
    getBestSellerProductThunk: create.asyncThunk(getBestSellerProductsAPI, {
      pending: (state) => {
        return {
          ...state,
          loading: true,
        };
      },
      fulfilled: (state, action) => {
        const { data, status } = action.payload;
        return {
          ...state,
          loading: false,
          bestSellers: data,
          status: status,
        };
      },
      rejected: (state) => {
        return {
          ...state,
          loading: false,
        };
      },
    }),
    getBrandThunk: create.asyncThunk(getBrandAPI, {
      pending: (state) => {
        return {
          ...state,
          loading: true,
        };
      },
      fulfilled: (state, action) => {
        const { data, status } = action.payload;
        return {
          ...state,
          loading: false,
          brandList: data,
          status: status,
        };
      },
      rejected: (state) => {
        return {
          ...state,
          loading: false,
        };
      },
    }),
    getProductThunk: create.asyncThunk(
      async ({ discount, brand }: { discount: boolean; brand: string[] }) => {
        const res = await getFilterProductAPI({ discount, brand });
        return res;
      },
      {
        pending: (state) => {
          return {
            ...state,
            loading: true,
          };
        },
        fulfilled: (state, action) => {
          const { data, status } = action.payload;
          return {
            ...state,
            loading: false,
            filterProduct: data,
            status: status,
          };
        },
        rejected: (state) => {
          return {
            ...state,
            loading: false,
          };
        },
      }
    ),
  }),
});

export const {
  getCategoryThunk,
  getCartItemThunk,
  updateQuantityCartItemThunk,
  deleteCartItemThunk,
  getItemMostSearchedThunk,
  getSearchKeywordThunk,
  searchProductThunk,
  getProductSaleThunk,
  toggleLikeProductThunk,
  getNewProductThunk,
  getBestSellerProductThunk,
  getBrandThunk,
  getProductThunk,
} = productSlice.actions;

export default productSlice.reducer;
