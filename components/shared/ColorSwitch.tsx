import { IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const ColorSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        colorMode === "light" ?
            <IconButton bg="blackAlpha.800" borderRadius={5} aria-label="switch" icon={<MoonIcon color="orange.200" w={6} h={6} />} onClick={toggleColorMode} />
            :
            <IconButton bg="blue.500" borderRadius={5} aria-label="switch" icon={<SunIcon color="yellow.100" w={6} h={6} />} onClick={toggleColorMode} />
    )
}

export default ColorSwitch