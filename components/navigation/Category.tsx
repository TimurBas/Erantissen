import NextLink from "next/link";
import { useState } from "react";

const Category = ({
  categoryName,
  path,
}: {
  categoryName: string;
  path: string;
}) => {
  const [fade, setFade] = useState(false);

  return (
    <NextLink href={`/${path}`}>
      <button
        type="button"
        className={`font-semibold text-gray-800 transition-all sm:text-base md:text-lg whitespace-nowrap dark:text-primary dark:hover:text-green-200 hover:text-gray-500`}
      >
        {categoryName}
      </button>
    </NextLink>
  );
};

export default Category;
