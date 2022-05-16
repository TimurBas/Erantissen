import { createContext } from "react";
import { HeroModel } from "./Hero";

const CarouselContext = createContext<HeroModel[]>([]);

export default CarouselContext;