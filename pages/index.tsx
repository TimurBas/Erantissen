import type { GetServerSideProps, NextPage } from "next";
import Hero from "../components/hero/Hero";
import Products from "../components/product/Products";
import PurchasingProcess from "../components/purchasing-process/PurchasingProcess";
import Divider from "../components/shared/Divider";
import Map from "../components/map/Map";
import CONFIG from "../config.json";
import { HeroModel } from "../shared/responses/HeroResponse";
import { ProductModel } from "../shared/responses/ProductResponse";

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

const fetchHeros = async () => {
  const req = await fetch(`${CONFIG.localUrl}/Hero`, { method: "GET" });
  const res = req.json();
  return res;
};

const fetchMostBoughtProducts = async () => {
  const req = await fetch(`${CONFIG.localUrl}/MostBoughtProducts`, {
    method: "GET",
  });
  const res = await req.json();
  return res;
};

export default Home;
