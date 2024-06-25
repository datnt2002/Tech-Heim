import { createSlice } from "@reduxjs/toolkit";
import { SignUpThunk } from "../thunk/authThunk";
import {
  deleteCartItemThunk,
  getBestSellerProductThunk,
  getCartItemThunk,
  getCategoryThunk,
  getItemMostSearchedThunk,
  getNewProductThunk,
  getProductSaleThunk,
  getSearchKeywordThunk,
  searchProductThunk,
  toggleLikeProductThunk,
  updateQuantityCartItemThunk,
} from "../thunk/productThunk";
import { Product, ProductCategory, ProductInCart } from "../../types/Product";

interface ProductState {
  categories: ProductCategory[];
  cartItems: ProductInCart[];
  searchItems: Product[];
  defaultSearchItems: Product[];
  searchKeywords: { id: string; title: string }[];
  productSale: Product[];
  newProducts: Product[];
  bestSellers: Product[];
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
  loading: false,
  status: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategoryThunk.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getCategoryThunk.fulfilled, (state, action) => {
        const { data, status } = action.payload;
        return {
          ...state,
          loading: false,
          categories: data,
          status: status,
        };
      })
      .addCase(SignUpThunk.rejected, (state) => {
        // const {data, status} = action.payload
        return {
          ...state,
          loading: false,
        };
      })
      .addCase(getCartItemThunk.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getCartItemThunk.fulfilled, (state, action) => {
        const { data, status } = action.payload;
        return {
          ...state,
          loading: false,
          cartItems: data,
          status: status,
        };
      })
      .addCase(updateQuantityCartItemThunk.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(updateQuantityCartItemThunk.fulfilled, (state, action) => {
        const { data, status } = action.payload;
        return {
          ...state,
          loading: false,
          cartItems: state.cartItems.map((item) =>
            item.id === data.id ? data : item
          ),
          status: status,
        };
      })
      .addCase(deleteCartItemThunk.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(deleteCartItemThunk.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          cartItems: state.cartItems.filter((item) => {
            return item.id !== action.payload?.id;
          }),
        };
      })
      .addCase(getItemMostSearchedThunk.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getItemMostSearchedThunk.fulfilled, (state, action) => {
        const { data, status } = action.payload;
        return {
          ...state,
          loading: false,
          defaultSearchItems: data,
          status: status,
        };
      })
      .addCase(getSearchKeywordThunk.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getSearchKeywordThunk.fulfilled, (state, action) => {
        const { data, status } = action.payload;
        return {
          ...state,
          loading: false,
          searchKeywords: data,
          status: status,
        };
      })
      .addCase(searchProductThunk.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(searchProductThunk.fulfilled, (state, action) => {
        const { data, status } = action.payload;
        return {
          ...state,
          loading: false,
          searchItems: data,
          status: status,
        };
      })
      .addCase(getProductSaleThunk.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getProductSaleThunk.fulfilled, (state, action) => {
        const { data, status } = action.payload;
        return {
          ...state,
          loading: false,
          productSale: data,
          status: status,
        };
      })
      .addCase(toggleLikeProductThunk.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(toggleLikeProductThunk.fulfilled, (state, action) => {
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
      })
      .addCase(getNewProductThunk.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getNewProductThunk.fulfilled, (state, action) => {
        const { data, status } = action.payload;
        return {
          ...state,
          loading: false,
          newProducts: data,
          status: status,
        };
      })
      .addCase(getBestSellerProductThunk.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getBestSellerProductThunk.fulfilled, (state, action) => {
        const { data, status } = action.payload;
        return {
          ...state,
          loading: false,
          bestSellers: data,
          status: status,
        };
      });
  },
});

export default productSlice.reducer;
