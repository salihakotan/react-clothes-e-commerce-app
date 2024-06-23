import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, GridItem, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
  return (
    <div>
      
     
        <GridItem w="100%">
          <Card maxW="sm">
          <Link to={`/product/${product.id}`}>
            <CardBody>
              <Image
              margin="auto"
              height="180px"
                src={product.image}
                alt={product.title}
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{product.title}</Heading>
               
                <Text color="blue.600" fontSize="2xl">
                  ${product.price}
                </Text>
              </Stack>
            </CardBody>
            </Link>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </GridItem>
        
    </div>
  );
}

export default ProductItem;
