import { BsFillMoonStarsFill } from "react-icons/bs";

const ColorSwitch = () => {
  return (
    <div className="flex justify-center items-center bg-gray-800 rounded-md w-10 h-10 hover:bg-gray-500 transition-all cursor-pointer">
      <BsFillMoonStarsFill className="w-6 h-6 text-orange-300" />
    </div>
  );
};

export default ColorSwitch;
