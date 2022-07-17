import { GetServerSideProps } from "next";
import React from "react";
import ProductPage from "../../../components/product/ProductPage";
import CONFIG from "../../../config.json";
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

const fetchProduct = async (productTitle: string) => {
  const req = await fetch(`${CONFIG.localUrl}/Product/${productTitle}`, {
    method: "GET",
  });
  const res = await req.json();
  return res;
};

export default Product;
