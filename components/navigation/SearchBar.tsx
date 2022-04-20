import { SearchIcon } from "@chakra-ui/icons"
import { Button, Flex, Kbd, Text } from "@chakra-ui/react"

const SearchBar = () => {
    return (
        <Button variant="search">
            <SearchIcon />
            <Flex>
                <Text>Søg efter et produkt</Text>
                <span>
                    <Kbd>Ctrl</Kbd><Kbd>K</Kbd>
                </span>
            </Flex>
        </Button>
    )
}

export default SearchBar