import Categories from "./Categories";
import Home from "./Home";
import SearchBar from "./SearchBar";
import Basket from "./Basket";
import ColorSwitch from "./ColorSwitch";

const NavigationBar = () => {
  return (
    <div className="flex items-center justify-center sticky top-0 z-10 pt-2 pb-2 bg-nav dark:bg-nav-dark shadow">
      <div className="flex space-x-9">
        <div className="flex items-center space-x-9">
          <Home />
          <Categories />
          <SearchBar />
        </div>
      </div>
      <div className="flex items-center justify-end w-full gap-3 ">
        <Basket />
        <ColorSwitch />
      </div>
    </div>
  );
};

export default NavigationBar;
