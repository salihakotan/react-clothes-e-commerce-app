import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {AiFillHeart, AiFillStar, AiOutlineHeart, AiTwotoneHeart} from "react-icons/ai"
import {
  getProductDetailAsync,
  selectProduct,
  selectProductError,
  selectProductStatus,
} from "../redux/productsSlice";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";

function ProductDetail() {
  const product = useSelector(selectProduct);
  const productStatus = useSelector(selectProductStatus);
  const productError = useSelector(selectProductError);

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
      dispatch(getProductDetailAsync(id));
    
  }, [dispatch, id]);

  if (productStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (productStatus === "failed") {
    return <div>Error: {productError}</div>;
  }

  console.log(product);

  return (
    <>
      {product && productStatus === "succeeded" && (
        <>
          <Heading mb="40px" as="h1">{product.title}</Heading>

        <Box display="flex" borderRadius="20px" border="2px solid #d5d5d5" width="fit-content" padding="20px" boxShadow="5px 5px 5px #d5d5d5">
          <Image boxSize="350px" objectFit="cover" src={product.image} />
          <Box ml="40px">
          
            <Text fontSize="40px" fontWeight="bold"> ${product.price}</Text>
            <Box mt="20px" bgColor="yellow.100" width="fit-content" padding="5px" borderRadius="5px">
           
           
           
            <Text textAlign="center" display="flex" justifyContent="center" alignItems="center">
            <AiFillStar
            className="starIcon"
            color="#ffc107"
            size={25}
          />
          {product.rating.rate} <span style={{fontSize:"12px",marginLeft:"5px"}}>({product.rating.count})</span></Text>
           
           
            </Box>
            <Text mt="20px">{product.description}</Text>
            
            <Box mt="20px">
            <Button variant="outline" colorScheme="pink">
            <AiFillHeart fontSize="22px" color="#ff3f78"/>
            Add to favorites</Button>
            </Box>

            <Box mt="20px">
            <Button colorScheme="blue">Add to basket</Button>
            <Button ml="20px" variant="outline" colorScheme="blue">Buy now</Button>
            </Box>
            <Text mt="20px" fontWeight="bold">Category: <span style={{color:"blue"}}>{product.category}</span></Text>

            
          </Box>
          </Box>
        </>
      )}
    </>
  );
}

export default ProductDetail;
