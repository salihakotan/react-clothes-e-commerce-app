import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  AiFillBackward,
  AiFillHeart,
  AiFillStar,
  AiOutlineHeart,
  AiTwotoneHeart,
} from "react-icons/ai";
import {
  getProductDetailAsync,
  selectProduct,
  selectProductError,
  selectProductStatus,
} from "../redux/productsSlice";
import { Box, Button, Heading, Image, Text, useDisclosure } from "@chakra-ui/react";
import { addToFavorites, favoritesSelector, removeFromFavorites } from "../redux/favoritesSlice";
import { addToBasket, basketSelector, removeFromBasket } from "../redux/basketSlice";
import OrderPanel from "../components/OrderPanel";

function ProductDetail() {


  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)


  const product = useSelector(selectProduct);
  const productStatus = useSelector(selectProductStatus);
  const productError = useSelector(selectProductError);

  const favorites = useSelector(favoritesSelector)
  const basket = useSelector(basketSelector)


  const dispatch = useDispatch();


  const [isFavorite,setIsFavorite] = useState(false)
  const [isInBasket,setIsInBasket] = useState(false)


  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductDetailAsync(id));
  }, [dispatch, id]);


  
  useEffect(()=> {
    const item = favorites.find((fav)=> fav.id === product.id)
    if(item){
        setIsFavorite(true)
    }else {
        setIsFavorite(false)
    }
},[favorites,product])



useEffect(()=> {
    const item = basket.find((_item)=> _item.id === product.id)
    if(item){
        setIsInBasket(true)
    }else {
        setIsInBasket(false)
    }
},[basket,product])

  if (productStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (productStatus === "failed") {
    return <div>Error: {productError}</div>;
  }

  const handleClickAddToFavorites = () => {
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

  const handleClickAddToBasket= () => {
    const item = basket.find((_item)=> _item.id === product.id)
    if(!item){
        dispatch(addToBasket(product))
        setIsInBasket(true)
        console.log("added basket")
    }else {
        dispatch(removeFromBasket(product))
        setIsInBasket(false)
        console.log("removed basket")
    }

  }


  const handleClickOrder = (product) => {
   console.log("buy")
       onOpen()
  }


  return (
    <>
       <Link to="/">
       <Button mb="10px" variant="outline" colorScheme="blue">
                <AiFillBackward />
              </Button>
       </Link>
      {product && productStatus === "succeeded" && (
        <>
          <Heading mb="40px" as="h1">
            {product.title}
          </Heading>

          <Box
            display="flex"
            borderRadius="20px"
            border="2px solid #d5d5d5"
            width="fit-content"
            padding="20px"
            boxShadow="5px 5px 5px #d5d5d5"
          >
            <Image boxSize="350px" objectFit="cover" src={product.image} />
            <Box ml="40px">
              <Text fontSize="40px" fontWeight="bold">
                {" "}
                ${product.price}
              </Text>
              <Box
                mt="20px"
                bgColor="yellow.100"
                width="fit-content"
                padding="5px"
                borderRadius="5px"
              >
                <Text
                  textAlign="center"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <AiFillStar className="starIcon" color="#ffc107" size={25} />
                  {product.rating.rate}{" "}
                  <span style={{ fontSize: "12px", marginLeft: "5px" }}>
                    ({product.rating.count})
                  </span>
                </Text>
              </Box>
              <Text mt="20px">{product.description}</Text>

              <Box mt="20px">
                <Button onClick={handleClickAddToFavorites} variant={`${isFavorite ? "solid" : "outline"}`} colorScheme="pink">
                 {!isFavorite && (
                   <>
                   <AiOutlineHeart fontSize="22px" />
                   Add to favorites
                   </>
                 )}
                 {isFavorite && (
                   <>
                   <AiFillHeart fontSize="22px"  />
                   Remove from favorites
                   </>
                 )}
                </Button>
              </Box>

              <Box mt="20px">
                <Button onClick={handleClickAddToBasket} variant={`${isInBasket ? "solid" : "outline"}`} colorScheme="blue">
                  {
                    isInBasket && (
                       <Text>Remove from card</Text>
                    )
                  }
                  {
                    !isInBasket && (
                       <Text>Add to card</Text>
                    )
                  }
                </Button>
                <Button onClick={()=>handleClickOrder(product)} ml="20px" colorScheme="blue">
                  Buy now
                </Button>
              </Box>
              <Text mt="20px" fontWeight="bold">
                Category:
                <span style={{ color: "blue" }}>{product.category}</span>
              </Text>

              <OrderPanel products={[product]} total={product.price} finalRef={finalRef} initialRef={initialRef} isOpen={isOpen} onClose={onClose} />
         
            </Box>
          </Box>
        </>
      )}
    </>
  );
}

export default ProductDetail;
