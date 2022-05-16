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
      <button type="button" className="whitespace-nowrap">
        {categoryName}
      </button>
    </NextLink>
  );
};

export default Category;
