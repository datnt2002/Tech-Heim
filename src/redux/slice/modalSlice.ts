import { createSlice } from "@reduxjs/toolkit";
interface AppModalState {
  authModal: boolean;
  searchModal: boolean;
  successModal: boolean;
  errorModal: boolean;
}
const initialState: AppModalState = {
  authModal: false,
  searchModal: false,
  successModal: false,
  errorModal: false,
};

export const appModalSlice = createSlice({
  name: "appModal",
  initialState,
  reducers: {
    setModalState: (state, action) => {
      const { key, isOpen } = action.payload;
      return {
        ...state,
        [key]: isOpen,
      };
    },
  },
});

export const { setModalState } = appModalSlice.actions;

export default appModalSlice.reducer;
