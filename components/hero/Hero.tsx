import { Box, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import CarouselInfo from "./CarouselInfo";
import { HeroInfo } from "../shared/Types";

const CONFIG = require("../../config.json");

const Hero = () => {
    const [heros, setHeros] = useState<HeroInfo[]>([])

    useEffect(() => {
        fetch(`${CONFIG.localUrl}/Hero`, { method: "GET", }).then((response) => response.json()).then((json) => setHeros(json))
    }, [])

    const imageUrls = heros.map((hero) => hero["imageUrl"])

    const heroInfo = heros.map((hero) => hero)
    console.log(heroInfo)

    return (
        <Box>
            <VStack>
                <Carousel imageUrls={imageUrls} />
                <CarouselInfo heroInfo={heroInfo} />
            </VStack>
        </Box>
    );
};

export default Hero;
