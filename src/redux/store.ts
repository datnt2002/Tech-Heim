import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slice/authSlice";
import ModalReducer from "./slice/modalSlice";
import ProductReducer from "./slice/productSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    product: ProductReducer,
    appModal: ModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
