import React, { Dispatch, SetStateAction } from "react";
import { ProductModel } from "../../shared/responses/ProductResponse";
import NextLink from "next/link";
import useComponentVisible from "../../hooks/useComponentVisible";

const SearchResults = ({
  filteredProducts,
  keyword,
  setKeyword,
  isComponentVisible
}: {
  filteredProducts: ProductModel[];
  keyword: string;
  setKeyword: Dispatch<SetStateAction<string>>;
  isComponentVisible: boolean
}) => {

  return (
    <>
    {isComponentVisible && (
      <div className="max-h-0 overflow-y-visible z-0 absolute">
      <ul className="bg-stone-300 list-none space-y-2 pt-14 rounded-2xl">
        {filteredProducts.map((filteredProduct) => {
          return (
            <NextLink
              href={`/${filteredProduct.categoryTitle}/${filteredProduct.subcategoryTitle}/${filteredProduct.title}`}
            >
              <li
                className="w-[600px] hover:opacity-75 hover:cursor-pointer transiton-all"
                onClick={() => setKeyword("")}
              >
                <div className="flex flex-row gap-x-3 gap-y-3 ml-3 mr-3 items-center flex-start">
                  <img
                    src={filteredProduct.imageUrl}
                    className="w-24 h-auto mb-4"
                  />
                  <div className="flex flex-col flex-start flex-wrap gap-y-2 h-36">
                    <p className="dark:text-black">
                      <span className="font-bold">
                        {keyword.charAt(0).toUpperCase() + keyword.slice(1)}
                      </span>
                      {filteredProduct.title
                        .toLowerCase()
                        .replace(keyword.toLowerCase(), "")}
                    </p>
                    <p className="text-sm text-stone-700">
                      {filteredProduct.description}
                    </p>
                    <p className="font-semibold dark:text-black">
                      Pris {filteredProduct.price} DKK
                    </p>
                  </div>
                </div>
              </li>
            </NextLink>
          );
        })}
      </ul>
    </div>
    )}
    </>
  );
};

export default SearchResults;
