import { AiOutlineSearch } from "react-icons/ai";
const SearchBar = () => {
  return (
    <button type="button">
      <div className="flex space-x-2">
        <input type="search" placeholder="Søg efter et produkt"></input>
      </div>
    </button>
  );
};

export default SearchBar;
