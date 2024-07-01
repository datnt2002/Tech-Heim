import { createAppSlice } from "../appSlice";

import { setModalState } from "./modalSlice";
import { signUp } from "../../services/auth.service";
import { User } from "../../types/User";
import { SignUpBody } from "../../types/RequestBody";

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

export const authSlice = createAppSlice({
  name: "auth",
  initialState,
  reducers: (create) => ({
    logoutAction: create.reducer(() => {
      return initialState;
    }),
    SignUpThunk: create.asyncThunk(
      async (data: SignUpBody, { dispatch }) => {
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
      },
      {
        pending: (state) => {
          return {
            ...state,
            loading: true,
          };
        },
        fulfilled: (state, action) => {
          const { data, status } = action.payload;
          return {
            ...state,
            loading: false,
            currentUser: data,
            status: status,
            isLoggedIn: true,
          };
        },
        rejected: (state) => {
          return {
            ...state,
            loading: false,
          };
        },
      }
    ),
  }),
});
export const { logoutAction, SignUpThunk } = authSlice.actions;
export default authSlice.reducer;
