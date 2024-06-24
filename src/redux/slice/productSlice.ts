import { createSlice } from "@reduxjs/toolkit";
import { SignUpThunk } from "../thunk/authThunk";
import { getCategoryThunk } from "../thunk/productThunk";
import { ProductCategory } from "../../types/Product";

interface ProductState {
  categories: ProductCategory[];
  loading: boolean;
  status: number;
}

const initialState: ProductState = {
  categories: [],
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
      });
  },
});

export default productSlice.reducer;
