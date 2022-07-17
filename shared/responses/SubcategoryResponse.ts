type SubcategoryModel = {
  title: string;
  imageUrl: string;
  products: ProductsModel[];
  mostBoughtProducts: ProductsModel[];
};

type ProductsModel = {
  title: string;
  price: number;
  description: string;
  quantity: number;
  imageUrl: string;
};

export type { SubcategoryModel, ProductsModel };
