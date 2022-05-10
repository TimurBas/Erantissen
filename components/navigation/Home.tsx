import { Flex, Heading, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link"

const Home = () => {
    return (
        <NextLink href="/" passHref>
            <Link>
                <Flex align="center" p={2}>
                    {/* <Image src="/erantissen.png" alt="logo" display="block" /> */}
                    <Heading variant="logo">Erantissen</Heading>
                </Flex>
            </Link>
        </NextLink >
    )
}

export default Home