import { GetServerSideProps } from "next";
import React from "react";
import { fetchProduct } from "../../../client/client";
import ProductPage from "../../../components/product/ProductPage";
import { ProductModel } from "../../../shared/responses/ProductResponse";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const productTitle = context.query.product as string;

  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  var product = await fetchProduct(productTitle);

  return { props: { product } };
};

const Product = ({ product }: { product: ProductModel }) => {
  return (
    <div>
      <ProductPage product={product} />
    </div>
  );
};



export default Product;
