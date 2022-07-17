import React from "react";
import { ProductsModel } from "../../shared/responses/SubcategoryResponse";
import Products from "../product/Products";
import Product from "../product/Product";

const SubcategoryPage = ({
  title,
  products,
  mostBoughtProducts,
}: {
  title: string;
  products: ProductsModel[];
  mostBoughtProducts: ProductsModel[];
}) => {
  return (
    <div className="flex flex-col items-center justify-center mt-5 mb-5">
      <h1 className="font-semibold text-4xl">{title}</h1>
      <Products heading={"Produkter"} products={products} />
      <Products heading={"Mest købte"} products={mostBoughtProducts} />
    </div>
  );
};

export default SubcategoryPage;
