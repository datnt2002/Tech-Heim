import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./slice/authSlice";
import ModalReducer from "./slice/modalSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    appModal: ModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
