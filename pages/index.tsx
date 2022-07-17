import type { GetServerSideProps, NextPage } from "next";
import Hero from "../components/hero/Hero";
import HomeProducts from "../components/product/HomeProducts";
import PurchasingProcess from "../components/purchasing-process/PurchasingProcess";
import Divider from "../components/shared/Divider";
import Map from "../components/map/Map";
import CONFIG from "../config.json";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const heros: HeroModel = await fetchHeros();
  

  return {
    props: { res },
  };
};

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <PurchasingProcess />
      <Divider />
      <HomeProducts />
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

export default Home;
