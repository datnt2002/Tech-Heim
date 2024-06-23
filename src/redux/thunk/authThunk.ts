import { createAsyncThunk } from "@reduxjs/toolkit";
import { signUp } from "../../services/auth.service";
import { SignUpBody } from "../../types/RequestBody";

export const SignUpThunk = createAsyncThunk(
  "users/signup",
  async (data: SignUpBody) => {
    try {
      const res = await signUp(data);
      console.log(res);

      return res;
    } catch (error) {
      console.log(error);
    }
  }
);
