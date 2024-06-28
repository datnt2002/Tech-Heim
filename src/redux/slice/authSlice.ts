import { createSlice } from "@reduxjs/toolkit";
import { SignUpThunk } from "../thunk/authThunk";
import { User } from "../../types/User";

interface AuthState {
  isLoggedIn: boolean;
  currentUser: User | undefined;
  loading: boolean;
  status: number;
}

const initialState: AuthState = {
  isLoggedIn: false,
  currentUser: undefined,
  loading: false,
  status: 0,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutAction: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(SignUpThunk.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(SignUpThunk.fulfilled, (state, action) => {
        const { data, status } = action.payload;
        return {
          ...state,
          loading: false,
          currentUser: data,
          status: status,
          isLoggedIn: true,
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
export const { logoutAction } = authSlice.actions;
export default authSlice.reducer;
