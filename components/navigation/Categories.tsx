import { Flex, Button, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Categories = () => {
    return (
        <Flex>
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
        </Flex>
    );
};

export default Categories;
