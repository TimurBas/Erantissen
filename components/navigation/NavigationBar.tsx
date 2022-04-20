import { Flex } from "@chakra-ui/react"
import Basket from "./Basket"
import Categories from "./Categories"
import Home from "./Home"
import SearchBar from "./SearchBar"

const NavigationBar = () => {
    return (
        <Flex alignItems="center">
            <Home />
            <Categories />
            <SearchBar />
            <Basket />
        </Flex>
    )
}

export default NavigationBar