import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/hero/Hero";
import HomeProducts from "../components/product/HomeProducts";
import PurchasingProcess from "../components/purchasing-process/PurchasingProcess";
import Divider from "../components/shared/Divider";
import Map from "../components/map/Map";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
      <Divider />
      <PurchasingProcess />
      <Divider />
      <HomeProducts />
      <Divider />
      <Map />
    </div>
  );
};

export default Home;
