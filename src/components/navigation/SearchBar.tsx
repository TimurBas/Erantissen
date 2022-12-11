import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { fetchAllProducts } from "../../client/client";
import useComponentVisible from "../../hooks/useComponentVisible";
import { ProductModel } from "../../shared/responses/ProductResponse";
import SearchResults from "./SearchResults";

const SearchBar = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [keyword, setKeyword] = useState<string>("");
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true);

  useEffect(() => {
    async function setAllProducts() {
      const json = await fetchAllProducts();
      setProducts(json)
    }
    setAllProducts();
  }, []);

  const handleClick = () => {
    if (!isComponentVisible) setIsComponentVisible(true)
  }

  const isIncludingKeyword = (input: string) =>
    input.toLowerCase().includes(keyword.toLowerCase());

  // const filteredProducts = products.filter((p) => true);
  const filteredProducts = products.filter((p) => isIncludingKeyword(p.title));

  return (
    <div ref={ref} className="flex flex-col" onClick={() => handleClick()}>
      <div className="relative md:w-[300px] 2xl:w-[600px] z-10">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <AiOutlineSearch className="w-6 h-6 text-gray-500" />
        </div>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.currentTarget.value)}
          className="block p-2 pl-10 pt-3 w-full text-sm text-gray-800 bg-primary rounded-2xl placeholder:text-gray-800 focus:outline-none"
          placeholder="Søg efter et produkt"
          required
        />
      </div>
      {keyword == "" ? (
        <></>
      ) : (
        <SearchResults
          filteredProducts={filteredProducts}
          keyword={keyword}
          setKeyword={setKeyword}
          isComponentVisible={isComponentVisible}
        />
      )}
    </div>
  );
};

export default SearchBar;
