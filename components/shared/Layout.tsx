import { Box, Center } from "@chakra-ui/react"
import { ReactNode } from "react"
import NavigationBar from "../navigation/NavigationBar"
import ColorSwitch from "./ColorSwitch"

type LayoutProps = {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <Box>
            <NavigationBar />
            <ColorSwitch />
            <Center>
                {children}
            </Center>
        </Box>
    )
}

export default Layout