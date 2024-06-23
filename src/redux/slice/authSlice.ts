import { createSlice } from "@reduxjs/toolkit";
import { SignUpThunk } from "../thunk/authThunk";

const initialState = {
  isLoggedIn: false,
  currentUser: {},
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
    signUpAction: (state) => {
      return {
        ...state,
        loading: true,
      };
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

export default authSlice.reducer;
