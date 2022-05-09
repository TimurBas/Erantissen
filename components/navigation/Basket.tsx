import { Icon, Text, Button, VStack, useColorModeValue, Tooltip } from "@chakra-ui/react"
import { BsBasket2Fill } from "react-icons/bs"
import { useRouter } from 'next/router'

const Basket = () => {
    const router = useRouter()
    const bg = useColorModeValue("gray.100", "#0f2e29")

    return (
        <Tooltip label="Se kurv">
            <Button variant="cart" onClick={() => router.push("/kasse")} h={20} bg={bg} borderRadius="none">
                <VStack spacing={0}>
                    <Icon as={BsBasket2Fill} w={8} h={8} />
                    <Text>Kurv</Text>
                </VStack>
            </Button>
        </Tooltip>
    )
}

export default Basket