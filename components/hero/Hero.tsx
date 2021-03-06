import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { HeroModel } from "../shared/Types";
import CONFIG from "../../config.json";
import CarouselContext from "./CarouselContext";

const Hero = () => {
    const [heros, setHeros] = useState<HeroModel[]>([])

    useEffect(() => {
        fetch(`${CONFIG.localUrl}/Hero`, { method: "GET", }).then((response) => response.json()).then((json) => setHeros(json))
    }, [])

    return (
        <CarouselContext.Provider value={heros}>
            <Carousel />
        </CarouselContext.Provider>
    );
};

export default Hero;

