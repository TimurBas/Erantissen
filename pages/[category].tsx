import CategoryPage from "../components/category/CategoryPage";
import CONFIG from "../config.json";
import { GetServerSideProps } from "next";

type CategoryModel = {
  title: string;
  description: string;
  subcategories: Subcategory[];
};

type Subcategory = {
  title: string;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const categoryTitle = context.query.category as string;

  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const req = await fetch(`${CONFIG.localUrl}/Category/${categoryTitle}`, {
    method: "GET",
  });
  const res: CategoryModel = await req.json();

  return {
    props: { res },
  };
};

const Category = ({ res }: { res: CategoryModel }) => {
  const subcategories = res.subcategories.map((sc) => sc.title);

  return (
    <div>
      <CategoryPage
        title={res.title}
        description={res.description}
        categories={subcategories}
      />
    </div>
  );
};

export default Category;
