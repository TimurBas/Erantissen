type HeroModel = {
  imageNumber: number;
  imageUrl: string;
  heading: string;
  paragraph: string;
  buttonText: string;
  discountText: string;
  discountAmount: number;
};

type ProductModel = {
  title: string;
  price: number;
  description: string;
  quantity: number;
  imageUrl: string;
  tag: string;
};

export type { HeroModel, ProductModel };
