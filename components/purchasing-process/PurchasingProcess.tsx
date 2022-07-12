import { HiCursorClick } from "react-icons/hi";
import {
  BsBasket2Fill,
  BsFillCreditCardFill,
  BsCircleFill,
} from "react-icons/bs";
import { FiPackage } from "react-icons/fi";

const PurchasingProcess = () => {
  const color = "rgb(34,197,94)";
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="font-bold text-4xl">Købs Processen</h1>
      <div className="flex flex-col items-center bg-orange-900 relative max-w-3xl before:w-2 before:bg-gradient-to-b from-green-500 to-green-700 before:min-h-[250px] before:absolute">
        <div className="inset-0 flex flex-col justify-center items-center mt-5">
          <BsCircleFill className="z-10 " />
          <div className="h-1 w-28 bg-gradient-to-r to-green-500  via-purple-500 from-transparent z-10 absolute mr-32"></div>
        </div>
      </div>
    </div>
  );
};

export default PurchasingProcess;

<div className="flex flex-col justify-center items-center w-full ">
  <h1>Købs Processen</h1>
  <div className="grid grid-cols-11 gap-4 mt-10">
    <div>
      <p>hej1</p>
    </div>
    <div className="flex flex-col">
      <p className="">Vælg dine varer</p>
    </div>
    <div>
      <p>Rarrow</p>
    </div>
    <div>
      <p>hej2</p>
    </div>
    <div className="flex flex-col">
      <p className="">Gå til kassen</p>
    </div>
    <div>
      <p>Rarrow</p>
    </div>
    <div>
      <p>hej3</p>
    </div>
    <div className="flex flex-col">
      <p className="">Betal</p>
    </div>
    <div>
      <p>Rarrow</p>
    </div>
    <div>
      <p>hej4</p>
    </div>
    <div className="flex flex-col">
      <p className="">Afhent dine varer i butikken</p>
    </div>
  </div>
</div>;
