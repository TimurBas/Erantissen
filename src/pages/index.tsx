import type { GetServerSideProps, NextPage } from "next";
import Hero from "../components/hero/Hero";
import Products from "../components/product/Products";
import PurchasingProcess from "../components/purchasing-process/PurchasingProcess";
import Divider from "../components/shared/Divider";
import Map from "../components/map/Map";
import { HeroModel } from "../shared/responses/HeroResponse";
import { ProductModel } from "../shared/responses/ProductResponse";
import { fetchHeros, fetchMostBoughtProducts } from "../client/client";

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
      <Map />
    </div>
  );
};

export default Home;
