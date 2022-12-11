import { ProductModel } from "./ProductResponse";

type SubcategoryModel = {
  title: string;
  imageUrl: string;
  products: ProductModel[];
  categoryTitle: string;
};

export type { SubcategoryModel };
