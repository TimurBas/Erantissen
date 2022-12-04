import React, { Dispatch, SetStateAction, useState } from "react";
import { ProductModel } from "../../shared/redux/ProductModel";

type TitleToPriceMapper = {
  title: string;
  price: number;
};

const CartProduct = ({
  product,
  setPriceAcc,
}: {
  product: ProductModel;
  setPriceAcc: Dispatch<SetStateAction<TitleToPriceMapper[]>>;
}) => {
  const [productAmount, setProductAmount] = useState(product.cartAmount);

  const decreaseProductAmount = () => {
    if (productAmount == 1) return;
    let mutatedProductAmount = productAmount - 1;
    setProductAmount(mutatedProductAmount);
    setPriceAcc((arr) => {
      const arrWithoutTitle = arr.filter((item) => item.title != product.title);
      return [
        ...arrWithoutTitle,
        { title: product.title, price: product.price * mutatedProductAmount },
      ];
    });
  };

  const increaseProductAmount = () => {
    let mutatedProductAmount = productAmount + 1;
    setProductAmount(mutatedProductAmount);
    setPriceAcc((arr) => {
      const arrWithoutTitle = arr.filter((item) => item.title != product.title);
      return [
        ...arrWithoutTitle,
        { title: product.title, price: product.price * mutatedProductAmount },
      ];
    });
  };

  return (
    <div className="flex items-center hover:bg-stone-100 dark:hover:bg-cart-products-dark -mx-8 px-6 py-5 transition-all">
      <div className="flex w-2/5">
        <div className="w-36">
          <img className="h-36" src={product.imageUrl} alt="" />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold">{product.title}</span>
          <span className="text-green-500 text-sm">{product.description}</span>
          <a
            href="#"
            className="font-semibold dark:hover:text-red-500 hover:text-red-500 text-gray-500 dark:text-slate-50 text-md h-5 w-2"
          >
            Fjern
          </a>
        </div>
      </div>
      <div className="flex justify-center w-1/5">
        <svg
          className="fill-current text-gray-600 dark:text-white hover:opacity-70 w-3"
          viewBox="0 0 448 512"
          onClick={() => decreaseProductAmount()}
        >
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
        <input
          className="mx-2 border text-center w-10 dark:bg-white dark:text-black transition-all"
          type="text"
          defaultValue={productAmount}
        ></input>
        <svg
          className="fill-current text-gray-600 w-3 dark:text-white hover:opacity-70"
          viewBox="0 0 448 512"
          onClick={() => increaseProductAmount()}
        >
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>
      </div>
      <span className="text-center w-1/5 font-semibold text-sm ">
        {(product.price * productAmount).toFixed(2)} DKK
      </span>
      <span className="text-center w-1/5 font-semibold text-sm ">
        {(product.price * productAmount).toFixed(2)} DKK
      </span>
    </div>
  );
};

export default CartProduct;
