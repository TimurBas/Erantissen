import { Box, VStack } from "@chakra-ui/react"
import Carousel from "./Carousel"
import CarouselInfo from "./CarouselInfo"

const Hero = () => {
    return (
        <Box>
            <VStack>
                <Carousel />
                <CarouselInfo />
            </VStack>
        </Box>
    )
}

export default Hero