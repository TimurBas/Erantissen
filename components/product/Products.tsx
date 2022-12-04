import { useState } from "react";
import { ProductModel } from "../../shared/responses/ProductResponse";
import SuccessToaster from "../toasters/SuccessToaster";
import Product from "./Product";

const Products = ({
  heading,
  products,
}: {
  heading: string;
  products: ProductModel[];
}) => {
  const [toastTitles, setToastTitles] = useState<string[]>([]);
  const toastTitlesProcessed = toastTitles;
  return (
    <>
      <div className="flex justify-center items-center w-full flex-col mb-10 mt-10">
        <h1 className="font-bold text-4xl">{heading}</h1>
        <div className="grid grid-cols-4 gap-4 mt-10">
          {products.length == 0 ? (
            <p>Loading</p>
          ) : (
            <>
              {products.map((p) => (
                <Product
                  key={p.title}
                  info={p}
                  setToastTitles={setToastTitles}
                />
              ))}
            </>
          )}
        </div>
      </div>
      <div className="fixed bottom-4 right-10 z-10 w-72">
        {toastTitles.map((toastTitle) => (
          <SuccessToaster title={toastTitle} />
        ))}
      </div>
    </>
  );
};

export default Products;
