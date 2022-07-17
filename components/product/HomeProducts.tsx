import CONFIG from "../../config.json";
import { useEffect, useState } from "react";
import Product from "./Product";

export type ProductModel = {
  title: string;
  price: number;
  description: string;
  quantity: number;
  imageUrl: string;
};

const HomeProducts = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    fetch(`${CONFIG.localUrl}/MostBoughtProducts`, { method: "GET" })
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="flex justify-center items-center w-full flex-col mb-10 mt-10">
      <h1 className="font-bold text-4xl">Mest købte</h1>
      <div className="grid grid-cols-4 gap-4 mt-10">
        {products.length == 0 ? (
          <p>Loading</p>
        ) : (
          <>
            {products.map((p) => (
              <Product key={p.title} info={p} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default HomeProducts;
