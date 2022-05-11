import { Divider, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import CONFIG from "../../config.json";
import { useEffect, useState } from "react";
import { ProductModel } from "../shared/Types";
import Product from "./Product";

const HomeProducts = () => {
    const [products, setProducts] = useState<ProductModel[]>([])

    useEffect(() => {
        fetch(`${CONFIG.localUrl}/MostBoughtProducts`, { method: "GET", }).then((response) => response.json()).then((json) => setProducts(json))
    }, [])

    console.log(products)
    return (
        <Flex justifyContent="center" alignItems="center" w="100vw" flexDirection="column" mb={10}>
            <Divider mt={50} mb={50} />
            <Heading>Mest Købte</Heading>
            <Grid templateColumns="repeat(4, 1fr)" gap={4} mt={7}>
                {products.length == 0
                    ? <Text>Loading</Text> :
                    (<>
                        <GridItem>
                            <Product info={products[0]} />
                        </GridItem><GridItem>
                            <Product info={products[1]} />
                        </GridItem><GridItem>
                            <Product info={products[2]} />
                        </GridItem><GridItem>
                            <Product info={products[3]} />
                        </GridItem>
                    </>)}
            </Grid>
        </Flex>
    )
}

export default HomeProducts