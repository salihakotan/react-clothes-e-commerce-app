import { Box, Button, Grid, Heading, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { Avatar, List, Skeleton } from 'antd';
import ProductItem from '../components/ProductItem';
import { useSelector } from 'react-redux';
import { favoritesSelector } from '../redux/favoritesSlice';

function Favorites() {
    
  
    const favorites = useSelector(favoritesSelector)

  return (
    <div>
    <Heading mb="30px">Favorites</Heading>

    {favorites && favorites.length<=0 && (
        <Text textAlign="center">No favorites yet</Text>
    )}
  
    <Grid mt="40px" templateColumns="repeat(4, 1fr)" gap={6}>
        {favorites &&
            favorites.map((product, i) => {
            return <ProductItem key={i} product={product} />;
          })}
      </Grid>

</div>
  )
}

export default Favorites