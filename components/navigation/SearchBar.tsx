import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import CONFIG from "../../config.json";
import { ProductModel } from "../../shared/responses/ProductResponse";
import SearchResults from "./SearchResults";

const fetchAllProducts = async () => {
  var response = await fetch(`${CONFIG.localUrl}/Product`, {
    method: "POST",
  });
  const json = await response.json();
  return json;
};

const SearchBar = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [keyword, setKeyword] = useState<string>("");

  useEffect(() => {
    async function fetchMyApi() {
      const response = await fetch(`${CONFIG.localUrl}/Product`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const json = await response.json();
      setProducts(json);
    }
    fetchMyApi();
  }, []);

  console.log(keyword);

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(keyword.toLowerCase())
  );
  console.log(filteredProducts);
  return (
    <div className="flex flex-col">
      <div className="flex z-10">
        <div className="relative w-[300px]">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <AiOutlineSearch className="w-6 h-6 text-gray-500" />
          </div>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.currentTarget.value)}
            className="block p-2 pl-10 pt-3 w-full text-sm text-gray-800 bg-white rounded-2xl placeholder:text-gray-800 focus:outline-none"
            placeholder="Søg efter et produkt"
            required
          />
        </div>
      </div>
      {keyword == "" ? null : (
        <SearchResults filteredProducts={filteredProducts} />
      )}
    </div>
  );
};

export default SearchBar;
