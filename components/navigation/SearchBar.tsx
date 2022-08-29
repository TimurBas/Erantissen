import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import CONFIG from "../../config.json";
import { ProductModel } from "../../shared/responses/ProductResponse";

const fetchAllProducts = async () => {
  var response = await fetch(`${CONFIG.localUrl}/Product`, {
    method: "POST",
  });
  const json = await response.json();
  return json;
};

const SearchBar = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);

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

  return (
    <div className="flex">
      <div className="relative w-[300px]">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <AiOutlineSearch className="w-6 h-6 text-gray-500" />
        </div>
        <input
          type="text"
          className="block p-2 pl-10 pt-3 w-full text-sm text-gray-900 bg-gray-50 rounded-2xl border border-gray-300 focus:outline-none"
          placeholder="Søg efter et produkt"
          required
        />
      </div>
    </div>
  );
};

export default SearchBar;
