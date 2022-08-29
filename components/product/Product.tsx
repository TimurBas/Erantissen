import { ProductModel } from "../../shared/responses/ProductResponse";
import NextLink from "next/link";
import { addProductToCart } from "../../redux/slices/productSlice";
import { useAppDispatch } from "../../redux/hooks";
import { useState } from "react";
import SuccessToaster from "../toasters/SuccessToaster";

const Product = ({ info }: { info: ProductModel }) => {
  const [isToasterShown, setIsToasterShown] = useState(false);
  const dispatch = useAppDispatch();
  const productPath = `/${info.categoryTitle}/${info.subcategoryTitle}/${info.title}`;

  const handleClick = () => {
    dispatch(addProductToCart({ ...info, cartAmount: 1 }));
    setIsToasterShown(true);
    setTimeout(() => {
      setIsToasterShown(false);
    }, 3000);
  };

  return (
    <div>
      <NextLink href={productPath}>
        <div className="hover:cursor-pointer">
          <div className="flex items-center justify-center">
            <img className="" src={info.imageUrl} />
          </div>
          <div className="flex flex-col h-[100px] mt-5">
            <h1 className="text-xl font-bold">{info.title}</h1>
            <p className="max-w-[250px]">{info.description}</p>
          </div>
        </div>
      </NextLink>
      <div className="flex items-center mt-7">
        <h1 className="mr-5 font-bold">{info.price} DKK</h1>
        <button
          onClick={handleClick}
          className="px-2 py-2 transition-all bg-green-500 rounded-md hover:bg-green-700"
          type="button"
        >
          <p className="font-semibold text-white">Tilføj til kurven</p>
        </button>
      </div>
      {isToasterShown && <SuccessToaster title={info.title} />}
    </div>
  );
};

export default Product;
