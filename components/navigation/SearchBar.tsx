import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import CONFIG from "../../config.json";
// import useComponentVisible from "../../hooks/useComponentVisible";
import { ProductModel } from "../../shared/responses/ProductResponse";
import SearchResults from "./SearchResults";

const SearchBar = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [keyword, setKeyword] = useState<string>("");
  // const { ref, isComponentVisible } = useComponentVisible(true);

  useEffect(() => {
    async function fetchAllProducts() {
      const response = await fetch(`${CONFIG.localUrl}/Product`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const json = await response.json();
      setProducts(json);
    }
    fetchAllProducts();
  }, []);

  console.log(keyword);

  // const isIncludingKeyword = (input: string) =>
  //   input.toLowerCase().includes(keyword.toLowerCase());

  const filteredProducts = products.filter((p) => true);
  // const filteredProducts = products.filter((p) => isIncludingKeyword(p.title));

  return (
    <div className="flex flex-col">
      <div className="flex z-10">
        <div className="relative w-[600px]">
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
      {keyword == "" ? (
        <></>
      ) : (
        // <div ref={ref}>
        //   {isComponentVisible && (
        //     <SearchResults
        //       filteredProducts={filteredProducts}
        //       keyword={keyword}
        //       setKeyword={setKeyword}
        //     />
        //   )}
        // </div>
        <SearchResults
          filteredProducts={filteredProducts}
          keyword={keyword}
          setKeyword={setKeyword}
        />
      )}
    </div>
  );
};

export default SearchBar;
