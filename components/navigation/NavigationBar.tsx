import Categories from "./Categories";
import Home from "./Home";
import SearchBar from "./SearchBar";
import Basket from "./Basket";
import ColorSwitch from "./ColorSwitch";

const NavigationBar = () => {
  return (
    <div className="sticky top-0 z-2">
      <div className="flex items-center ml-5">
        <div className="flex space-x-9">
          <div className="flex items-center space-x-9">
            <Home />
            <Categories />
          </div>
          <SearchBar />
        </div>
        <div className="flex w-full justify-end mr-5">
          <Basket />
          <ColorSwitch />
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
