import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBlogAPI } from "../../services/blog.service";

export const getBlogThunk = createAsyncThunk("blogs", async () => {
  try {
    const res = await getBlogAPI();
  } catch (error) {
    console.log(error);
  }
});
