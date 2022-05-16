import { ProductModel } from "./HomeProducts";

const Product = ({ info }: { info: ProductModel }) => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img src={info.imageUrl} />
      </div>
      <div className="flex flex-col h-[100px] mt-5">
        <h1>{info.title}</h1>
        <p className="max-w-[250px]">{info.description}</p>
      </div>
      <div className="flex items-center mt-7">
        <h1 className="mr-5">{info.price} DKK</h1>
        <button type="button">Tilføj til kurven</button>
      </div>
    </div>
  );
};

export default Product;
