import { BsBasket2Fill } from "react-icons/bs";
import { useRouter } from "next/router";

const Basket = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center p-2 text-gray-800 dark:text-primary hover:text-gray-500 dark:hover:text-green-200 transition-all">
      <button onClick={() => router.push("/kasse")}>
        <div className="inset-0">
          <BsBasket2Fill className="w-8 h-8" />
          <p>Kurv</p>
        </div>
      </button>
    </div>
  );
};
export default Basket;
