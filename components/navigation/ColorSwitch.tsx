import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const ColorSwitch = () => {
  const { theme, setTheme } = useTheme();

  const handleSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      onClick={() => handleSwitch()}
      className="flex justify-center items-center bg-gray-800 dark:bg-blue-500 rounded-md w-10 h-10 hover:bg-gray-500 dark:hover:bg-blue-400 transition-all cursor-pointer"
    >
      {theme === "dark" ? (<BsSunFill className="w-6 h-6 text-yellow-200" />) : (<BsFillMoonStarsFill className="w-6 h-6 text-orange-300" />)}
    </div>
  );
};

export default ColorSwitch;
