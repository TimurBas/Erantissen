import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { Image, IconButton, Flex, useColorMode } from "@chakra-ui/react"
import { useState } from "react"

const Carousel = () => {
    const [current, setCurrent] = useState(0)
    const { colorMode } = useColorMode()

    const handleClick = (isLeftArrow: boolean) => {
        if (isLeftArrow) {
            current ? setCurrent(current - 1) : setCurrent(pathsLength - 1)
        } else {
            current == (pathsLength - 1) ? setCurrent(0) : setCurrent(current + 1)
        }
    }

    const paths = [
        "/hero1.jpg",
        "/hero2.jpg",
        "/hero3.jpg",
    ]
    const pathsLength = paths.length

    return (
        <Flex alignItems="center">
            <IconButton
                variant="carouselArrow"
                onClick={() => handleClick(true)}
                left="1rem"
                ml={5}
                aria-label='Left Carousel Arrow'
                icon={colorMode == "light" ? <ArrowBackIcon color="blackAlpha.900" w={7} h={7} /> : <ArrowBackIcon color={colorMode} w={7} h={7} />}
            />
            <Image src={paths.find((path) => current == (paths.indexOf(path)))} boxSize="100%" />
            <IconButton
                variant="carouselArrow"
                onClick={() => handleClick(false)}
                right="1rem"
                mr={5}
                aria-label='Right Carousel Arrow'
                icon={colorMode == "light" ? <ArrowForwardIcon color="blackAlpha.900" w={7} h={7} /> : <ArrowForwardIcon color={colorMode} w={7} h={7} />}
            />
        </Flex >
    )
}

export default Carousel