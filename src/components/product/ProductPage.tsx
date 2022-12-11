import React, { useState } from "react";
import { ProductModel } from "../../shared/responses/ProductResponse";
import SuccessToaster from "../toasters/SuccessToaster";
import Product from "./Product";

const ProductPage = ({ product }: { product: ProductModel }) => {
  const [toastTitles, setToastTitles] = useState<string[]>([]);

  return (
    <>
      <Product info={product} setToastTitles={setToastTitles} />
      <div className="fixed bottom-4 right-10 z-10 w-72">
        {toastTitles.map((toastTitle) => (
          <SuccessToaster key={toastTitle} title={toastTitle} />
        ))}
      </div>
    </>
  );
};

export default ProductPage;
