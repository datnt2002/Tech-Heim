import { createAppSlice } from '../appSlice'

import { setModalState } from './modalSlice'
import {
  addAddressUserAPI,
  getCurrentUserAPI,
  loginAPI,
  registerAPI
} from '../../services/auth.service'
import { Address, User } from '../../types/User'

interface AuthState {
  token: string | null
  currentUser: User | null
  address: Address | null
  loading: boolean
}

const initialState: AuthState = {
  currentUser: null,
  token: null,
  address: null,
  loading: true
}

export const authSlice = createAppSlice({
  name: 'auth',
  initialState,
  reducers: (create) => ({
    logoutAction: create.reducer(() => {
      localStorage.removeItem('token')
      return initialState
    }),
    registerThunk: create.asyncThunk(
      async ({
        fullName,
        email,
        password,
        phoneNumber
      }: {
        fullName: string
        email: string
        password: string
        phoneNumber: string
      }) => {
        const res = await registerAPI({
          fullName,
          email,
          password,
          phoneNumber
        })
        return res
      },
      {
        pending: (state) => {
          return {
            ...state,
            loading: true
          }
        },
        fulfilled: (state, action) => {
          const { data, status } = action.payload
          return {
            ...state,
            loading: false,
            users: data,
            status: status
          }
        },
        rejected: (state) => {
          return {
            ...state,
            loading: false
          }
        }
      }
    ),
    loginThunk: create.asyncThunk(
      async (
        { email, password }: { email: string; password: string },
        { dispatch }
      ) => {
        const res = await loginAPI({ email, password })
        if (res.status === 201) {
          localStorage.setItem('token', res.data.token)
          dispatch(setModalState({ key: 'successModal', isOpen: true }))
        }
        return res
      },
      {
        pending: (state) => {
          return {
            ...state,
            loading: true
          }
        },
        fulfilled: (state, action) => {
          const { data, status } = action.payload
          return {
            ...state,
            loading: false,
            token: data,
            status: status
          }
        }
      }
    ),
    getUserDetailThunk: create.asyncThunk(getCurrentUserAPI, {
      pending: (state) => {
        return {
          ...state,
          loading: true
        }
      },
      fulfilled: (state, action) => {
        const { data, status } = action.payload
        return {
          ...state,
          loading: false,
          currentUser: data,
          status: status
        }
      },
      rejected: (state) => {
        return {
          ...state,
          loading: false
        }
      }
    }),
    addAddressThunk: create.asyncThunk(
      async ({
        name,
        address,
        district,
        city,
        country
      }: {
        name: string
        address: string
        district: string
        city: string
        country: string
      }) => {
        const res = await addAddressUserAPI({
          name,
          address,
          district,
          city,
          country
        })
        return res
      },
      {
        pending: (state) => {
          return {
            ...state,
            loading: true
          }
        },
        fulfilled: (state, action) => {
          const { data, status } = action.payload
          return {
            ...state,
            loading: false,
            address: data,
            status: status
          }
        },
        rejected: (state) => {
          return {
            ...state,
            loading: false
          }
        }
      }
    )
  })
})
export const {
  logoutAction,
  registerThunk,
  getUserDetailThunk,
  addAddressThunk
} = authSlice.actions
export default authSlice.reducer
