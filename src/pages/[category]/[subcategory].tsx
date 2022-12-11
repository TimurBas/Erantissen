import { GetServerSideProps } from "next";
import React from "react";
import { fetchMostBoughtProducts, fetchSubcategory } from "../../client/client";
import SubcategoryPage from "../../components/subcategory/SubcategoryPage";
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

export default Subcategory;
