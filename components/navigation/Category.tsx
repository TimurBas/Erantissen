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
        className="sm:text-base md:text-lg whitespace-nowrap font-semibold text-gray-800  hover:text-gray-500 transition-all"
      >
        {categoryName}
      </button>
    </NextLink>
  );
};

export default Category;
