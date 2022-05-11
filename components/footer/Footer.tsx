import { Grid, GridItem, Heading, HStack, Text, VStack, Link, Button, Flex, Divider, Box, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { BsPinMap, BsTelephone, BsFacebook, BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai"

const Footer = () => {
    const bg = useColorModeValue("gray.100", "#0f2e29")

    return (
        <Box bg={bg} >
            <Divider mt={50} mb={50} />
            <Grid templateColumns="repeat(3, 1fr)" ml={25} mr={25}>
                <GridItem>
                    <Heading fontSize={22} textAlign="center" mb={2}>
                        Navigation
                    </Heading>
                    <VStack>
                        <NextLink href="/" passHref>
                            <Link>
                                <Button variant="footer">
                                    Hjem
                                </Button>
                            </Link>
                        </NextLink>
                        <NextLink href="/aabningstider" passHref>
                            <Link>
                                <Button variant="footer">
                                    Åbningstider
                                </Button>
                            </Link>
                        </NextLink>
                        <NextLink href="/kontakt" passHref>
                            <Link>
                                <Button variant="footer">
                                    Kontakt
                                </Button>
                            </Link>
                        </NextLink>
                        <NextLink href="/handelsbetingelser" passHref>
                            <Link>
                                <Button variant="footer">
                                    Handelsbetingelser
                                </Button>
                            </Link>
                        </NextLink>
                    </VStack>
                </GridItem>
                <GridItem>
                    <Heading fontSize={22} textAlign="center" mb={2}>
                        Information
                    </Heading>
                    <VStack gap={5}>
                        <HStack>
                            <a href="https://www.google.com/maps/place/Erantissen/@56.0917135,9.7573468,15z/data=!4m2!3m1!1s0x0:0x216843f11defc4aa?sa=X&ved=2ahUKEwjwpJDuxNj3AhWB6qQKHZD0DlAQ_BJ6BAhPEAU" target="_blank">
                                <HStack>
                                    <BsPinMap size={22} />
                                    <Text>Klostervej 8B, 8680 Ry</Text>
                                </HStack>
                            </a>

                        </HStack>
                        <a href="tel:+4586892883">
                            <HStack>
                                <BsTelephone size={22} />
                                <Text>+45 86 89 28 83</Text>
                            </HStack>
                        </a>
                        <HStack>
                            <a href="mailto:info@erantissen.dk">
                                <HStack>
                                    <AiOutlineMail size={22} />
                                    <Text>info@erantissen.dk</Text>
                                </HStack>
                            </a>
                        </HStack>
                    </VStack>
                </GridItem>
                <GridItem>
                    <Heading fontSize={22} textAlign="center" mb={2}>
                        Sociale Medier
                    </Heading>
                    <VStack gap={5}>
                        <NextLink href="https://www.facebook.com/erantissen" passHref>
                            <Link>
                                <HStack>
                                    <BsFacebook size={22} />
                                    <Button variant="footer">
                                        Facebook
                                    </Button>
                                </HStack>
                            </Link>
                        </NextLink>
                        <NextLink href="#" passHref>
                            <Link>
                                <HStack>
                                    <BsInstagram size={22} />
                                    <Button variant="footer">
                                        Instagram
                                    </Button>
                                </HStack>
                            </Link>
                        </NextLink>
                    </VStack>
                </GridItem>
            </Grid>
            <Divider mt={5} mb={5} />
            <Flex w="100%" alignItems="center" justifyContent="center">
                <Text>{new Date().getFullYear()} © Erantissen</Text>
            </Flex>
            <Box bg={bg} h={5} />
        </Box>
    )
}

export default Footer