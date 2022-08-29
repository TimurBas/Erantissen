import Products from "../components/product/Products";
import type { GetServerSideProps } from "next";
import { useAppSelector } from "../redux/hooks";
import { getProductsSelector } from "../redux/slices/productSlice";
import { useRouter } from "next/router";
import { ProductModel } from "../shared/responses/ProductResponse";
import CONFIG from "../config.json";

export const getServerSideProps: GetServerSideProps = async (context) => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const mostBoughtProducts = await fetchMostBoughtProducts();
  return {
    props: { mostBoughtProducts },
  };
};

const fetchMostBoughtProducts = async () => {
  const req = await fetch(`${CONFIG.localUrl}/Product/MostBoughtProducts`, {
    method: "GET",
  });
  const res = await req.json();
  return res;
};

const Checkout = ({
  mostBoughtProducts,
}: {
  mostBoughtProducts: ProductModel[];
}) => {
  const products = useAppSelector(getProductsSelector);
  const router = useRouter();

  return (
    <div>
      {products.length == 0 ? (
        <div className="flex flex-col items-center justify-center mt-24 gap-y-16">
          <h1 className="text-4xl font-bold">Din indkøbsliste er tom!</h1>
          <button
            className="px-5 py-3 text-xl font-semibold text-white transition-all bg-green-500 rounded-full hover:bg-green-700"
            onClick={() => router.push("/")}
          >
            Til Erantissen
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-4 mb-4 gap-y-16">
          <Products heading="Indkøbsliste" products={products} />
          <button
            className="px-5 py-3 text-xl font-semibold text-white transition-all bg-green-500 rounded-full hover:bg-green-700"
            onClick={() => {
              router.push("/kasse");
            }}
          >
            Gå til kassen
          </button>
          <Products
            heading={"Andre købte også"}
            products={mostBoughtProducts}
          />
        </div>
      )}
    </div>
  );
};

export default Checkout;
