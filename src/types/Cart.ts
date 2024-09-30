export type Cart = {
  id: string
  userID: string
  status: string
  cartItems: CartItem[]
}

export type CartItem = {
  id: number
  name: string
  image: string
  color: string
  quantity: number
  price: number
}
