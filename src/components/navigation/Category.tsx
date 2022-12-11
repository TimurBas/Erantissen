import NextLink from "next/link";
import { useState } from "react";

const Category = ({
  categoryName,
  path,
  isFooter,
}: {
  categoryName: string;
  path: string;
  isFooter: boolean;
}) => {
  return (
    <NextLink href={`/${path}`}>
      <button
        type="button"
        className={`font-semibold  transition-all sm:text-base md:text-lg whitespace-nowrap ${
          isFooter
            ? "text-primary dark:text-black hover:text-stone-300 dark:hover:text-stone-600"
            : "text-gray-800 dark:text-primary dark:hover:text-green-200 hover:text-gray-500`"
        }`}
      >
        {categoryName}
      </button>
    </NextLink>
  );
};

export default Category;
