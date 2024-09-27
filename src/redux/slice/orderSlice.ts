import {
  addOrderAPI,
  addtransactionAPI,
  getDetailOrderAPI
} from '../../services/order.service'
import { Order, Transaction } from '../../types/Order'

import { createAppSlice } from '../appSlice'

interface OrderState {
  loading: boolean
  order: Order | null
  transaction: Transaction | null
}

const initialState: OrderState = {
  loading: true,
  order: null,
  transaction: null
}

export const orderSlice = createAppSlice({
  name: 'order',
  initialState,
  reducers: (create) => ({
    addOrderThunk: create.asyncThunk(
      async (addressID: number) => {
        const res = await addOrderAPI(addressID)
        return res
      },
      {
        pending: (state) => {
          return {
            ...state,
            loading: false
          }
        },
        fulfilled: (state, action) => {
          const { data, status } = action.payload
          return {
            ...state,
            loading: false,
            order: data,
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
    getOrderDetailThunk: create.asyncThunk(
      async (orderID: string) => {
        const res = getDetailOrderAPI(orderID)
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
            order: data,
            loading: false,
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
    addTransactionThunk: create.asyncThunk(
      async ({
        orderID,
        type,
        deposit
      }: {
        orderID: string
        type: string
        deposit: number
      }) => {
        const res = await addtransactionAPI({ orderID, type, deposit })
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
            transaction: data,
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

export const { addOrderThunk, getOrderDetailThunk, addTransactionThunk } =
  orderSlice.actions

export default orderSlice.reducer
