import React from "react";
import { ProductModel } from "../../shared/responses/ProductResponse";
import Product from "./Product";

const ProductPage = ({ product }: { product: ProductModel }) => {
  return <Product info={product} />;
};

export default ProductPage;
