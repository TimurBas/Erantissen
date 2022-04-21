import { Flex, HStack } from "@chakra-ui/react"
import Categories from "./Categories"
import Home from "./Home"

const NavigationBar = () => {
    return (
        <HStack spacing={9} alignItems="center">
            <Home />
            <Categories />
        </HStack>
    )
}

export default NavigationBar