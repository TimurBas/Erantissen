type SubcategoryModel = {
  title: string;
  imageUrl: string;
  products: Products[];
  mostBoughtProducts: Products[];
};

type Products = {
  title: string;
  price: number;
  description: string;
  quantity: number;
  imageUrl: string;
};

export type { SubcategoryModel, Products };
