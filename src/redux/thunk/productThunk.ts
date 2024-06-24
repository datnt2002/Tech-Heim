import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoryAPI } from "../../services/product.service";

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
