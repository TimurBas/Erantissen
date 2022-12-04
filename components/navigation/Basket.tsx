import { BsBasket2Fill } from "react-icons/bs";
import { useRouter } from "next/router";
import { useAppSelector } from "../../redux/hooks";
import { getProductsLengthSelector } from "../../redux/slices/productSlice";

const Basket = () => {
  const router = useRouter();
  const cartLength = useAppSelector(getProductsLengthSelector);

  return (
    <div className="relative flex items-center justify-center p-2 text-gray-800 transition-all dark:text-primary hover:text-gray-500 dark:hover:text-green-200">
      <button onClick={() => router.push("/tjekud")}>
        <div className="inset-0">
          <BsBasket2Fill className="w-8 h-8" />
          <p className="font-semibold">Kurv</p>
          <div className="absolute top-0 right-0">
            <div className="flex items-center justify-center w-6 h-6 text-sm font-semibold text-white bg-green-500 rounded-full">
              {cartLength}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};
export default Basket;
