import React from "react";
import HomeProducts from "../product/HomeProducts";
import Category from "./Category";

const CategoryPage = ({
  title,
  description,
  categories,
}: {
  title: string;
  description: string;
  categories: string[];
}) => {
  return (
    <div className="flex flex-col items-center justify-center mt-5 mb-5">
      <div className="flex flex-col flex-start gap-y-3 w-7/12">
        <h1 className="font-bold text-4xl">{title}</h1>
        <p className="max-w-6xl">{description}</p>
      </div>
      <div className="flex flex-col gap-y-3 mt-5 w-7/12">
        <h1 className="font-bold text-4xl">Kategorier</h1>
        <div className="grid grid-cols-5 mt-5">
          {categories.map((title) => (
            <Category title={title} />
          ))}
        </div>
      </div>
      <HomeProducts />
    </div>
  );
};

export default CategoryPage;

{
  /* <div className="flex flex-wrap justify-center gap-x-20 mt-5 max-w-6xl">
          {categories.map((title) => (
            <Category title={title} />
          ))}
        </div> */
}
