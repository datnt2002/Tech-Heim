import { Comment } from './Comment'

export type ProductCategory = {
  id: string
  name: string
  image: string
  icon?: string
  depth: number
  subCategories: ProductCategory[]
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
  comments?: Comment[]
}

export type SpecFilter = { [key: string]: string[] }

export type PriceTag = {
  id: number
  productID: number
  price: number
  discount?: boolean
  percent?: number
  saleprice?: number
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
