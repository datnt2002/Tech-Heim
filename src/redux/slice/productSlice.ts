import {
  Brand,
  Colors,
  Product,
  ProductCategory,
  ProductInCart,
} from "../../types/Product";
import {
  addToCartAPI,
  deleteCartItemsAPI,
  getBestSellerProductsAPI,
  getBrandAPI,
  getCartItemsAPI,
  getCategoryAPI,
  getColorAPI,
  getDetailProductAPI,
  getNewProductsAPI,
  getProductAPI,
  getProductCatAPI,
  getProductSaleAPI,
  getSearchKeywordAPI,
  getSimilarProductAPI,
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
  similarProduct: Product[];
  product: Product[];
  productCatList: Product[];
  brandList: Brand[];
  colorList: Colors[];
  loading: boolean;
  status: number;
  shipCost: number;
  detailProduct: Product | null;
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
  detailProduct: null,
  brandList: [],
  similarProduct: [],
  product: [],
  productCatList: [],
  colorList: [],
  // filterProduct: [],
  loading: false,
  status: 0,
  shipCost: 0,
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
    addCartItemThunk: create.asyncThunk(
      async (data: Omit<ProductInCart, "id" | "quantity">) => {
        const res = await addToCartAPI(data);
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
            cartItems: state.cartItems.concat(data),
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
    chooseShipCostAction: create.reducer((state, action) => {
      const data = action.payload as unknown as number;
      return {
        ...state,
        shipCost: data,
      };
    }),
    getDetailProductThunk: create.asyncThunk(
      async (id: string) => {
        const data = await getDetailProductAPI(id);
        return data;
      },
      {
        pending: (state) => {
          return {
            ...state,
            loading: true,
          };
        },
        fulfilled: (state, action) => {
          const { data } = action.payload;
          return {
            ...state,
            loading: false,
            detailProduct: data,
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
    getSimilarProductThunk: create.asyncThunk(
      async (product: Product) => {
        const data = await getSimilarProductAPI(product.brand);
        return data;
      },
      {
        pending: (state) => {
          return {
            ...state,
            loading: true,
          };
        },
        fulfilled: (state, action) => {
          const { data } = action.payload;
          return {
            ...state,
            loading: false,
            similarProduct: data,
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
    getProductThunk: create.asyncThunk(getProductAPI, {
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
          product: data,
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
    getProductCatThunk: create.asyncThunk(
      async (categoryId: string) => {
        const data = await getProductCatAPI(categoryId);
        return data;
      },
      {
        pending: (state) => {
          return {
            ...state,
            loading: true,
          };
        },
        fulfilled: (state, action) => {
          const { data } = action.payload;
          return {
            ...state,
            loading: false,
            productCatList: data,
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
    getColorThunk: create.asyncThunk(getColorAPI, {
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
          colorList: data,
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
  addCartItemThunk,
  getDetailProductThunk,
  getSimilarProductThunk,
  getProductCatThunk,
  getProductThunk,
  getColorThunk,
  chooseShipCostAction,
} = productSlice.actions;

export default productSlice.reducer;
