import { Box, Flex, Text, Image, Heading, Button } from "@chakra-ui/react";
import { ProductModel } from "../shared/Types";

const Product = ({ info }: { info: ProductModel }) => {
    return (
        <Box>
            <Flex justifyContent="center" alignItems="center">
                <Image src={info.imageUrl} />
            </Flex>
            <Flex flexDir="column" h={100} mt={5}>
                <Heading fontSize={22}>{info.title}</Heading>
                <Text maxW={250}>{info.description}</Text>
            </Flex>
            <Flex alignItems="center" mt={7}>
                <Heading fontSize={20} mr={5}>{info.price} DKK</Heading>
                <Button variant="product">Tilføj til kurven</Button>
            </Flex>
        </Box>
    )
}

export default Product