export type ProductCategory = {
  id: string;
  name: string;
  image: string;
  icon?: string;
  depth: number;
  subCategories: ProductCategory[];
};

export type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  salePrice?: number;
  discount?: boolean;
  percent?: number;
  favorite?: boolean;
  description?: string;
  color: string;
  rating?: number;
  categoryId: string;
  brand: string;
  screenSize: number;
  processor: string;
  GPU: string;
  memory: number;
};

export type ProductInCart = {
  id: string;
  name: string;
  image?: string;
  price: number;
  description?: string;
  color?: string;
  quantity: number;
};
