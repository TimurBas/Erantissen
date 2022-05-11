import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { Image, IconButton, Flex, useColorMode, Text, VStack } from "@chakra-ui/react"
import { useContext, useState } from "react"
import CarouselContext from "./CarouselContext"
import CarouselInfo from "./CarouselInfo"

const Carousel = () => {
    const [current, setCurrent] = useState(0)
    const { colorMode } = useColorMode()
    const heros = useContext(CarouselContext)
    const imageUrls = heros.map((hero) => hero["imageUrl"])

    const handleClick = (isLeftArrow: boolean) => {
        if (isLeftArrow) {
            current ? setCurrent(current - 1) : setCurrent(imageUrlsLength - 1)
        } else {
            current == (imageUrlsLength - 1) ? setCurrent(0) : setCurrent(current + 1)
        }
    }

    const imageUrlsLength = imageUrls.length

    return (
        <VStack>
            <Flex alignItems="center">
                <IconButton
                    variant="carouselArrow"
                    onClick={() => handleClick(true)}
                    left="1rem"
                    ml={5}
                    aria-label='Left Carousel Arrow'
                    icon={colorMode == "light" ? <ArrowBackIcon color="blackAlpha.900" w={7} h={7} /> : <ArrowBackIcon color={colorMode} w={7} h={7} />}
                />
                {imageUrlsLength == 0 ? <Text>Loading</Text> : <Image src={imageUrls.find((path) => current == (imageUrls.indexOf(path)))} boxSize="100%" />}
                <IconButton
                    variant="carouselArrow"
                    onClick={() => handleClick(false)}
                    right="1rem"
                    mr={5}
                    aria-label='Right Carousel Arrow'
                    icon={colorMode == "light" ? <ArrowForwardIcon color="blackAlpha.900" w={7} h={7} /> : <ArrowForwardIcon color={colorMode} w={7} h={7} />}
                />
            </Flex >
            <CarouselInfo imageNumber={current} />
        </VStack>
    )
}

export default Carousel