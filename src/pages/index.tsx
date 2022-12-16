import type { GetServerSideProps, NextPage } from "next";
import Products from "../components/product/Products";
import Divider from "../components/shared/Divider";
import { HeroModel } from "../shared/responses/HeroResponse";
import { ProductModel } from "../shared/responses/ProductResponse";
import { fetchHeros, fetchMostBoughtProducts } from "../client/client";
import Hero from "../components/hero/Hero";
import PurchasingProcess from "../components/purchasing-process/PurchasingProcess";
import GoogleMaps from "../components/map/GoogleMaps"

export const getServerSideProps: GetServerSideProps = async (context) => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  const heros: HeroModel = await fetchHeros();
  const mostBoughtProducts = await fetchMostBoughtProducts();

  return {
    props: { heros, mostBoughtProducts },
  };
};

const Home = ({
  heros,
  mostBoughtProducts,
}: {
  heros: HeroModel[];
  mostBoughtProducts: ProductModel[];
}) => {
  return (
    <div>
      <Hero heros={heros} />
      <PurchasingProcess />
      <Divider />
      <Products heading="Mest købte" products={mostBoughtProducts} />
      <Divider />
      <GoogleMaps />
    </div>
  );
};

export default Home;
