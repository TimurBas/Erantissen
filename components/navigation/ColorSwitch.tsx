import { useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

const ColorSwitch = () => {
  const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    if (darkMode) {
      window.document.documentElement.classList.add("dark");
      localStorage.setItem("erantissenDarkMode", "true");
    } else {
      window.document.documentElement.classList.remove("dark");
      localStorage.setItem("erantissenDarkMode", "false");
    }
  }, [darkMode]);

  const onClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      onClick={onClick}
      className="flex justify-center items-center bg-gray-800 rounded-md w-10 h-10 hover:bg-gray-500 transition-all cursor-pointer"
    >
      <BsFillMoonStarsFill className="w-6 h-6 text-orange-300" />
    </div>
  );
};

export default ColorSwitch;
