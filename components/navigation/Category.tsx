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
        className="whitespace-nowrap font-semibold text-gray-800  hover:text-gray-500 transition-all text-lg"
      >
        {categoryName}
      </button>
    </NextLink>
  );
};

export default Category;
