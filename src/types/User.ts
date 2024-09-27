import { CartItem } from './Cart'
import { OrderItems } from './Order'

export type User = {
  id: string | number
  fullName: string
  email: string
  phoneNumber?: string
  password: string
  address?: Address
  bill?: Bill[]
  cart?: CartItem[]
}

export type CreditCard = {
  id: string
  image: string
  code: string
  name: string
  expires: string
  selected: boolean
}

export type PaymentCard = {
  idPayment: string
  cardNumber: string
  name: string
  type: string
  expired: string
  cvv: string
  selected?: boolean
}

export type Bill = {
  id: string | number
  fullname: string
  street: string
  city: string
  region: string
  postalcode: string
  shippingMethod: string
  shippingPrice: number
  products: OrderItems[]
  change?: number
  grandTotal: number
}

export type Address = {
  id: number
  fullname: string
  address: string
  district: string
  city: string
  country: string
}
