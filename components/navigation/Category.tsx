import NextLink from "next/link";

const Category = ({
  categoryName,
  path,
}: {
  categoryName: string;
  path: string;
}) => {
  return (
    <NextLink href={`/${path}`}>
      <button
        type="button"
        className="font-semibold text-gray-800 transition-all sm:text-base md:text-lg whitespace-nowrap dark:text-primary dark:hover:text-green-200 hover:text-gray-500"
      >
        {categoryName}
      </button>
    </NextLink>
  );
};

export default Category;
