import { Box, Center, Divider, Flex, HStack, useColorModeValue } from "@chakra-ui/react"
import { ReactNode } from "react"
import Basket from "../navigation/Basket"
import NavigationBar from "../navigation/NavigationBar"
import SearchBar from "../navigation/SearchBar"
import ColorSwitch from "./ColorSwitch"

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const bg = useColorModeValue("gray.100", "#0f2e29")

    return (
        <Box>
            <Box bg={bg}>
                <Flex alignItems="center">
                    <HStack spacing={9}>
                        <NavigationBar />
                        <SearchBar />
                    </HStack>
                    <HStack w="100%" justifyContent="flex-end" mr={8} alignItems="center">
                        <Basket />
                        <ColorSwitch />
                    </HStack>
                </Flex>
                <Divider />
            </Box>
            <Center>
                {children}
            </Center>
        </Box >
    )
}

export default Layout