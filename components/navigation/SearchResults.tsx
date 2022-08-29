import React from "react";
import { ProductModel } from "../../shared/responses/ProductResponse";

const SearchResults = ({
  filteredProducts,
}: {
  filteredProducts: ProductModel[];
}) => {
  return (
    <div className="max-h-0 overflow-y-visible z-0 absolute">
      <ul className="bg-slate-300 list-none space-y-2 pt-14 rounded-t-2xl">
        {filteredProducts.map((filteredProduct) => {
          return (
            <>
              <li className="w-[300px]">
                <p>Test</p>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchResults;
