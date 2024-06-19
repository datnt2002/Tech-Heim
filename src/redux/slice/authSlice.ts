import { createSlice } from "@reduxjs/toolkit";
import { SignUpThunk } from "../thunk/authThunk";

const initialState = {
  isLoggedIn: false,
  currentUser: {},
  status: "idle",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUpAction: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(SignUpThunk.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(SignUpThunk.fulfilled, (state, action) => {
        (state.status = "idle"), (state.currentUser = action.payload);
      });
  },
});

export default authSlice.reducer;
