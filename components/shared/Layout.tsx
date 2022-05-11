import { Box, Center, Divider, Flex, HStack, useColorModeValue } from "@chakra-ui/react"
import { ReactNode } from "react"
import Footer from "../footer/Footer"
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
            <Box bg={bg} sx={{ position: 'sticky', top: '0', }} zIndex={2}>
                <Flex alignItems="center" ml={5}>
                    <HStack spacing={9}>
                        <NavigationBar />
                        <SearchBar />
                    </HStack>
                    <HStack w="100%" justifyContent="flex-end" mr={5}>
                        <Basket />
                        <ColorSwitch />
                    </HStack>
                </Flex>
                <Divider />
            </Box>
            <Center>
                {children}
            </Center>
            <Footer />
        </Box >
    )
}

export default Layout