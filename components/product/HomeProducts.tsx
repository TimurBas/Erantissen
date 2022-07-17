import { ProductModel } from "../../shared/responses/ProductResponse";
import Product from "./Product";

const HomeProducts = ({ products }: { products: ProductModel[] }) => {
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
