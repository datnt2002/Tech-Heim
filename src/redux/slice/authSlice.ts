import { createAppSlice } from "../appSlice";

import { setModalState } from "./modalSlice";
import {
  getCreditCardAPI,
  getCurrentUserAPI,
  signUp,
} from "../../services/auth.service";
import { CreditCard, User } from "../../types/User";
import { SignUpBody } from "../../types/RequestBody";

interface AuthState {
  isLoggedIn: boolean;
  currentUser: User | undefined;
  creditCard: CreditCard[];
  selectedCreditCard: CreditCard | undefined;
  loading: boolean;
  status: number;
}

const initialState: AuthState = {
  isLoggedIn: false,
  currentUser: undefined,
  creditCard: [],
  selectedCreditCard: undefined,
  loading: false,
  status: 0,
};

export const authSlice = createAppSlice({
  name: "auth",
  initialState,
  reducers: (create) => ({
    logoutAction: create.reducer(() => {
      localStorage.removeItem("token");
      return initialState;
    }),
    SignUpThunk: create.asyncThunk(
      async (data: SignUpBody, { dispatch }) => {
        const res = await signUp(data);
        if (res?.status === 201) {
          localStorage.setItem("token", res.data.id);
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
    getCurrentUserThunk: create.asyncThunk(
      async (id: string) => {
        const res = await getCurrentUserAPI(id);
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
    getCreditCardThunk: create.asyncThunk(getCreditCardAPI, {
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
          creditCard: data,
          status: status,
          selectedCreditCard: data.find(
            (card: CreditCard) => card.selected === true
          ),
        };
      },
      rejected: (state) => {
        return {
          ...state,
          loading: false,
        };
      },
    }),
  }),
});
export const {
  logoutAction,
  SignUpThunk,
  getCurrentUserThunk,
  getCreditCardThunk,
} = authSlice.actions;
export default authSlice.reducer;
