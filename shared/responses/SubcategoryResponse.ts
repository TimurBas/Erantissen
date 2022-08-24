import { ProductModel } from "./ProductResponse";

type SubcategoryModel = {
  title: string;
  imageUrl: string;
  products: ProductModel[];
  mostBoughtProducts: ProductModel[];
  categoryTitle: string;
};

export type { SubcategoryModel };
