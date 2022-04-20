import { IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const ColorSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        colorMode === "light" ?
            <IconButton bg="#38A169" borderRadius="5" aria-label="switch" icon={<MoonIcon color="gray.300" w={6} h={6} />} onClick={toggleColorMode} />
            :
            <IconButton bg="rgb(222,218,193)" borderRadius="5" aria-label="switch" icon={<SunIcon color="blackAlpha.700" w={6} h={6} />} onClick={toggleColorMode} />
    )
}

export default ColorSwitch