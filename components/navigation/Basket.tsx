import { Flex, Icon, Text } from "@chakra-ui/react"
import { BsBasket2Fill } from "react-icons/bs"
import BasketContext from "../../hooks/BasketContext";


const Basket = () => {
    return (
        <Flex alignItems="center" flexDirection="column" w={100}>
            <Icon as={BsBasket2Fill} w={8} h={8} />
            <Text>Kurv</Text>
        </Flex>
    )
}

export default Basket