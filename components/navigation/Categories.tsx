import { Flex, Button, Link, HStack } from "@chakra-ui/react";
import NextLink from "next/link";

const Categories = () => {
    return (
        <HStack spacing={6}>
            <NextLink href="/sundhed" passHref>
                <Link>
                    <Button variant="primary">
                        Sundhed
                    </Button>
                </Link>
            </NextLink>
            <NextLink href="/skønhed" passHref>
                <Link>
                    <Button variant="primary">
                        Skønhed
                    </Button>
                </Link>
            </NextLink>
            <NextLink href="/mad-og-drikke" passHref>
                <Link>
                    <Button variant="primary">
                        Mad & drikke
                    </Button>
                </Link>
            </NextLink>
            <NextLink href="/personlig-pleje" passHref>
                <Link>
                    <Button variant="primary">
                        Personlig Pleje
                    </Button>
                </Link>
            </NextLink>
            <NextLink href="/tilbud" passHref>
                <Link>
                    <Button variant="primary">
                        Tilbud
                    </Button>
                </Link>
            </NextLink>
        </HStack>
    );
};

export default Categories;
