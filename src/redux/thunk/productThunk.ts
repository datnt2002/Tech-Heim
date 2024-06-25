import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteCartItemsAPI,
  getCartItemsAPI,
  getCategoryAPI,
  getProductSaleAPI,
  getSearchKeywordAPI,
  mostProductSearchedAPI,
  searchProductAPI,
  updateQuantityCartItemsAPI,
} from "../../services/product.service";

export const getCategoryThunk = createAsyncThunk(
  "product-category",
  async () => {
    try {
      const res = await getCategoryAPI();
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

export const deleteCartItemThunk = createAsyncThunk(
  "cart/delete",
  async (id: string) => {
    try {
      const res = await deleteCartItemsAPI(id);
      return { res, id };
    } catch (error) {
      console.log(error);
    }
  }
);

export const searchProductThunk = createAsyncThunk(
  "product/search",
  async (searchValue: string) => {
    try {
      const res = await searchProductAPI(searchValue);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getItemMostSearchedThunk = createAsyncThunk(
  "search-most",
  async () => {
    try {
      const res = await mostProductSearchedAPI();
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getSearchKeywordThunk = createAsyncThunk(
  "search-keyword",
  async () => {
    try {
      const res = await getSearchKeywordAPI();
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getProductSaleThunk = createAsyncThunk(
  "product/sale",
  async () => {
    try {
      const res = await getProductSaleAPI();
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);
