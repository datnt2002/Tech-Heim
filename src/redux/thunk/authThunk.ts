import { createAsyncThunk } from "@reduxjs/toolkit";
import { signUp } from "../../services/auth.service";
import { SignUpBody } from "../../types/RequestBody";
import { setModalState } from "../slice/modalSlice";

export const SignUpThunk = createAsyncThunk(
  "users/signup",
  async (data: SignUpBody, { dispatch }) => {
    try {
      const res = await signUp(data);

      if (res?.status === 201) {
        dispatch(
          setModalState({
            key: "successModal",
            isOpen: true,
          })
        );
      }
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);
