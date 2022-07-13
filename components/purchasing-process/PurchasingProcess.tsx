import { HiCursorClick } from "react-icons/hi";
import { BsBasket2Fill, BsFillCreditCardFill } from "react-icons/bs";
import { FiPackage } from "react-icons/fi";

const PurchasingProcess = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full mt-6 mb-12">
      <h1 className="font-bold text-4xl">Købs Processen</h1>
      <div className="grid grid-cols-4 gap-4 mt-10">
        <div className="flex flex-col items-center">
          <HiCursorClick className="w-8 h-8 text-green-700" />
          <p className="text-lg font-semibold">Vælg dine varer</p>
        </div>
        <div className="flex flex-col items-center">
          <BsBasket2Fill className="w-8 h-8 text-green-700" />
          <p className="text-lg font-semibold">Gå til kassen</p>
        </div>
        <div className="flex flex-col items-center">
          <BsFillCreditCardFill className="w-8 h-8 text-green-700" />
          <p className="text-lg font-semibold">Betal for varerne</p>
        </div>
        <div className="flex flex-col items-center">
          <FiPackage className="w-8 h-8 text-green-700" />
          <p className="text-lg font-semibold">Afhent dine varer i butikken</p>
        </div>
      </div>
    </div>
  );
};

export default PurchasingProcess;
