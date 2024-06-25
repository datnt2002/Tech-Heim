import { createSlice } from "@reduxjs/toolkit";
import { SignUpThunk } from "../thunk/authThunk";
import {
  deleteCartItemThunk,
  getCartItemThunk,
  getCategoryThunk,
  getItemMostSearchedThunk,
  getSearchKeywordThunk,
  searchProductThunk,
  updateQuantityCartItemThunk,
} from "../thunk/productThunk";
import { Product, ProductCategory, ProductInCart } from "../../types/Product";

interface ProductState {
  categories: ProductCategory[];
  cartItems: ProductInCart[];
  searchItems: Product[];
  defaultSearchItems: Product[];
  searchKeywords: { id: string; title: string }[];
  loading: boolean;
  status: number;
}

const initialState: ProductState = {
  categories: [],
  cartItems: [],
  searchItems: [],
  defaultSearchItems: [],
  searchKeywords: [],
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
        console.log(data);
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
      });
  },
});

export default productSlice.reducer;
