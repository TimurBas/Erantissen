import { createContext } from "react";
import { HeroModel } from "../shared/Types";

const CarouselContext = createContext<HeroModel[]>([]);

export default CarouselContext;
