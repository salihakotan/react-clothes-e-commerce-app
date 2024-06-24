import {
    Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToFavorites, favoritesSelector, removeFromFavorites } from "../redux/favoritesSlice";
import { addToBasket, basketSelector, removeFromBasket } from "../redux/basketSlice";

function ProductItem({ product }) {

    const [isFavorite,setIsFavorite] = useState(false)
    const [isInBasket,setIsInBasket] = useState(false)
    
    const favorites = useSelector(favoritesSelector)
    const basket = useSelector(basketSelector)

    const dispatch = useDispatch();


    useEffect(()=> {
        const item = favorites.find((fav)=> fav.id === product.id)
        if(item){
            setIsFavorite(true)
            console.log("this is favs")
        }else {
            setIsFavorite(false)
            console.log("this not favs")
        }
    },[favorites,product])



    useEffect(()=> {
        const item = basket.find((_item)=> _item.id === product.id)
        if(item){
            setIsInBasket(true)
            console.log("this is in basket")
        }else {
            setIsInBasket(false)
            console.log("this is not basket")
        }
    },[basket,product])


    const handleClickFavoriteButton = () => {
        const item = favorites.find((fav)=> fav.id === product.id)
    if(!item){
        dispatch(addToFavorites(product))
        setIsFavorite(true)
        console.log("added favs")
    }else {
        dispatch(removeFromFavorites(product))
        setIsFavorite(false)
        console.log("removed favs")
    }
    }


    
    const handleClickBasketButton = () => {
        const item = basket.find((_item)=> _item.id === product.id)
    if(!item){
        dispatch(addToBasket(product))
        setIsInBasket(true)
        console.log("added to basket")
    }else {
        dispatch(removeFromBasket(product))
        setIsInBasket(false)
        console.log("removed from basket")
    }
    }

  return (
    <div>
      <GridItem w="100%">
        <Card maxW="sm">
       <Box position="absolute" right="0">
       <Button display="flex" width="fit-content" float="right" colorScheme="pink" variant={`${isFavorite ? "solid" : "outline"}`} onClick={handleClickFavoriteButton} >
              {
                isFavorite && (
                    <AiFillHeart  size={20}/>
                )
              }
              {
                !isFavorite && (
                    <AiOutlineHeart size={20} />
                )
              }
                
                {/* if exist in favs  <AiFillHeart/>
                 */}
              </Button>
       </Box>
          <Link to={`/product/${product.id}`}>
            <CardBody>
              <Image
                margin="auto"
                height="160px"
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
            <ButtonGroup spacing="1.5">
             
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button onClick={handleClickBasketButton} variant={`${isInBasket ? "solid" : "outline"}`} colorScheme="blue">
              {
                    isInBasket && (
                        <Text fontSize="0.9em">Remove from card</Text>
                    )
                  }
                  {
                    !isInBasket && (
                       <Text fontSize="1.1em">Add to card</Text>
                    )
                  }
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </GridItem>
    </div>
  );
}

export default ProductItem;
