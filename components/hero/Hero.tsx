import { useEffect, useState } from "react";
import CONFIG from "../../config.json";
import CarouselContext from "./CarouselContext";
import Carousel from "./Carousel";

export type HeroModel = {
  imageNumber: number;
  imageUrl: string;
  heading: string;
  paragraph: string;
  buttonText: string;
  discountText: string;
  discountAmount: number;
};

const Hero = () => {
  const [heros, setHeros] = useState<HeroModel[]>([]);

  useEffect(() => {
    fetch(`${CONFIG.localUrl}/Hero`, { method: "GET" })
      .then((response) => response.json())
      .then((json) => setHeros(json));
  }, []);

  return (
    <CarouselContext.Provider value={heros}>
      <Carousel />
    </CarouselContext.Provider>
  );
};

export default Hero;
