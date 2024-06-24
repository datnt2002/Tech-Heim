export type ProductCategory = {
  name: string;
  image?: string;
  icon?: string;
  depth: number;
  subCategories: ProductCategory[];
};

export type Product = {
  name: string;
  image?: string;
  price?: number;
  salePrice?: number;
  isSale?: boolean;
  percent?: number;
  favorite?: boolean;
  description?: string;
  color?: string;
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
