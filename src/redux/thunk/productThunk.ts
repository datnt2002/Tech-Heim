import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCartItemsAPI,
  getCategoryAPI,
  updateQuantityCartItemsAPI,
} from "../../services/product.service";

export const getCategoryThunk = createAsyncThunk(
  "product-category",
  async () => {
    try {
      const res = await getCategoryAPI();
      console.log(res);

      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getCartItemThunk = createAsyncThunk("cart", async () => {
  try {
    const res = await getCartItemsAPI();
    return res;
  } catch (error) {
    console.log(error);
  }
});

export const updateQuantityCartItemThunk = createAsyncThunk(
  "cart/update",
  async ({ id, quantity }: { id: string; quantity: number }) => {
    try {
      const res = await updateQuantityCartItemsAPI({ id, quantity });
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);
