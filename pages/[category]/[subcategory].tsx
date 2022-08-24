import { GetServerSideProps } from "next";
import React from "react";
import SubcategoryPage from "../../components/subcategory/SubcategoryPage";
import CONFIG from "../../config.json";
import { ProductModel } from "../../shared/responses/ProductResponse";
import { SubcategoryModel } from "../../shared/responses/SubcategoryResponse";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const subcategoryTitle = context.query.subcategory as string;
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  var subcategory = await fetchSubcategory(subcategoryTitle);
  var mostBoughtProducts = await fetchMostBoughtProducts();

  return {
    props: { subcategory, mostBoughtProducts },
  };
};

const Subcategory = ({
  subcategory,
  mostBoughtProducts,
}: {
  subcategory: SubcategoryModel;
  mostBoughtProducts: ProductModel[];
}) => {
  return (
    <div>
      <SubcategoryPage
        title={subcategory.title}
        products={subcategory.products}
        mostBoughtProducts={mostBoughtProducts}
      />
    </div>
  );
};

const fetchSubcategory = async (subcategoryTitle: string) => {
  const req = await fetch(
    `${CONFIG.localUrl}/Subcategory/${subcategoryTitle}`,
    {
      method: "GET",
    }
  );
  const res = await req.json();
  return res;
};

const fetchMostBoughtProducts = async () => {
  const req = await fetch(`${CONFIG.localUrl}/Product/MostBoughtProducts`, {
    method: "GET",
  });
  const res = await req.json();
  return res;
};

export default Subcategory;
