import { Comments } from './Comment'

export type Category = {
  id: string
  categoryName: string
  image: string
}

export type Product = {
  id: number
  name: string
  image: string
  price?: PriceTag
  color: string
  rating?: number
  category: string
  brand: string
  specifications?: { key: string; value: string }[]
  comments?: Comments[]
  imagePreview?: string[]
}

export type SpecFilter = { key: string; value: string[] }

export type PriceTag = {
  id: number
  productID: number
  price: number
  percent?: number
}

export type Brand = {
  id: string
  name: string
  image: string
}

export type ImagePreview = {
  img: string
}

export type Colors = {
  color: string
}

export type ShipCost = {
  label: string
  time?: string
  price: number
}
