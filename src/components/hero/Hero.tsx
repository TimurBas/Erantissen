import { HeroModel } from "../../shared/responses/HeroResponse";
import Carousel from "./Carousel";

const Hero = ({ heros }: { heros: HeroModel[] }) => {
  return <Carousel heros={heros} />;
};

export default Hero;
