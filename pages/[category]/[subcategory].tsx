import { GetServerSideProps } from "next";
import React from "react";
import SubcategoryPage from "../../components/subcategory/SubcategoryPage";
import CONFIG from "../../config.json";
import { SubcategoryModel } from "../../shared/responses/SubcategoryResponse";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const subcategoryTitle = context.query.subcategory as string;

  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const req = await fetch(
    `${CONFIG.localUrl}/Subcategory/${subcategoryTitle}`,
    {
      method: "GET",
    }
  );
  const res: SubcategoryModel = await req.json();

  return {
    props: { res },
  };
};

const Subcategory = ({ res }: { res: SubcategoryModel }) => {
  return (
    <div>
      <SubcategoryPage
        title={res.title}
        products={res.products}
        mostBoughtProducts={res.mostBoughtProducts}
      />
    </div>
  );
};

export default Subcategory;

//   const Category = ({ res }: { res: CategoryModel }) => {
//     const subcategories = res.subcategories.map((sc) => sc.title);

//     return (
//       <div>
//         <CategoryPage
//           title={res.title}
//           description={res.description}
//           categories={subcategories}
//         />
//       </div>
//     );
//   };

//   export default Category;
