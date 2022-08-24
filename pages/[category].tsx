import CategoryPage from "../components/category/CategoryPage";
import CONFIG from "../config.json";
import { GetServerSideProps } from "next";
import { ProductModel } from "../shared/responses/ProductResponse";
import { CategoryModel } from "../shared/responses/CategoryResponse";

export const getServerSideProps: GetServerSideProps = async (context) => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

  const categoryTitle = context.query.category as string;
  const category = await fetchCategory(categoryTitle);

  const mostBoughtProducts = await fetchMostBoughtProducts();

  return {
    props: { category, mostBoughtProducts },
  };
};

const Category = ({
  category,
  mostBoughtProducts,
}: {
  category: CategoryModel;
  mostBoughtProducts: ProductModel[];
}) => {
  const subcategories = category.subcategories.map((sc) => sc.title);

  return (
    <div>
      <CategoryPage
        title={category.title}
        description={category.description}
        categories={subcategories}
        mostBoughtProducts={mostBoughtProducts}
      />
    </div>
  );
};

const fetchCategory = async (categoryTitle: string) => {
  const req = await fetch(`${CONFIG.localUrl}/Category/${categoryTitle}`, {
    method: "GET",
  });
  const res = req.json();
  return res;
};

const fetchMostBoughtProducts = async () => {
  const req = await fetch(`${CONFIG.localUrl}/Product/MostBoughtProducts`, {
    method: "GET",
  });
  const res = await req.json();
  return res;
};

export default Category;
