import { Flex } from "@chakra-ui/react"
import Categories from "./Categories"
import Home from "./Home"

const NavigationBar = () => {
    return (
        <Flex alignItems="center">
            <Home />
            <Categories />
        </Flex>
    )
}

export default NavigationBar