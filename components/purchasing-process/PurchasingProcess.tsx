import { Flex, Grid, GridItem, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import { HiCursorClick } from 'react-icons/hi';
import { BsBasket2Fill, BsFillCreditCardFill } from "react-icons/bs"
import { FiPackage } from "react-icons/fi"
import { ArrowRightIcon } from "@chakra-ui/icons";

const PurchasingProcess = () => {
    return (
        <Flex justifyContent="center" alignItems="center" w="100vw" flexDirection="column">
            <Heading>Købs Processen</Heading>
            <Grid templateColumns="repeat(11, 1fr)" gap={4} mt={20}>
                <GridItem colSpan={2}>
                    <VStack>
                        <HiCursorClick size={35} />
                        <Text fontSize={17} fontWeight="bold">Vælg dine varer</Text>
                    </VStack>
                </GridItem>
                <GridItem>
                    <ArrowRightIcon boxSize={25} />
                </GridItem>
                <GridItem colSpan={2}>
                    <VStack>
                        <BsBasket2Fill size={35} />
                        <Text fontSize={17} fontWeight="bold">Gå til kassen</Text>
                    </VStack>
                </GridItem>
                <GridItem>
                    <ArrowRightIcon boxSize={25} />
                </GridItem>
                <GridItem colSpan={2}>
                    <VStack>
                        <BsFillCreditCardFill size={35} />
                        <Text fontSize={17} fontWeight="bold">Betal</Text>
                    </VStack>
                </GridItem>
                <GridItem >
                    <ArrowRightIcon boxSize={25} />
                </GridItem>
                <GridItem colSpan={2}>
                    <VStack>
                        <FiPackage size={35} />
                        <Text fontSize={17} fontWeight="bold">Afhent dine varer i butikken</Text>
                    </VStack>
                </GridItem>
            </Grid>
        </Flex>)
}

export default PurchasingProcess