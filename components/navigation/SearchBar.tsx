import { SearchIcon } from "@chakra-ui/icons"
import { Button, Flex, HStack, Kbd, Text } from "@chakra-ui/react"

const SearchBar = () => {
    return (
        <Button variant="search">
            <HStack spacing={2}>
                <SearchIcon />
                <HStack spacing={150}>
                    <Text>Søg efter et produkt</Text>
                    <span>
                        <Kbd>Ctrl</Kbd><Kbd>K</Kbd>
                    </span>
                </HStack>
            </HStack>
        </Button>
    )
}

export default SearchBar