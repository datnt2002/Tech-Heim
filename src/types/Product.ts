export type ProductCategory = {
  name: string;
  image?: string;
  icon?: string;
  depth: number;
  subCategories: ProductCategory[];
};
