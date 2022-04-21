import { Icon, Text, Button, VStack, Flex, useColorModeValue } from "@chakra-ui/react"
import { BsBasket2Fill } from "react-icons/bs"
import { useRouter } from 'next/router'

const Basket = () => {
    const router = useRouter()
    const bg = useColorModeValue("gray.100", "#0f2e29")

    return (
        <Button variant="cart" onClick={() => router.push("/kasse")} h={20} bg={bg} borderRadius="none">
            <VStack spacing={0}>
                <Icon as={BsBasket2Fill} w={8} h={8} />
                <Text>Kurv</Text>
            </VStack>
        </Button>
    )
}

export default Basket