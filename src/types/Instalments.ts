export type Instalment = {
  id: string | number
  productImg: string
  cartId: string
  dueAmount: number
  dueDate: string
  actualAmount?: number
  paymentDate?: string
  total: number
}
