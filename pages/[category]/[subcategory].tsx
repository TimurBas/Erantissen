import { GetServerSideProps } from "next";
import React from "react";
import SubcategoryPage from "../../components/subcategory/SubcategoryPage";
import CONFIG from "../../config.json";
import { SubcategoryModel } from "../../shared/responses/SubcategoryResponse";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const subcategoryTitle = context.query.subcategory as string;
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  var subcategory = await fetchSubcategory(subcategoryTitle);

  return {
    props: { subcategory },
  };
};

const Subcategory = ({ subcategory }: { subcategory: SubcategoryModel }) => {
  return (
    <div>
      <SubcategoryPage
        title={subcategory.title}
        products={subcategory.products}
        mostBoughtProducts={subcategory.mostBoughtProducts}
      />
    </div>
  );
};

const fetchSubcategory = async (subcategoryTitle: string) => {
  console.log(subcategoryTitle);
  const req = await fetch(
    `${CONFIG.localUrl}/Subcategory/${subcategoryTitle}`,
    {
      method: "GET",
    }
  );
  const res = await req.json();
  return res;
};

export default Subcategory;
