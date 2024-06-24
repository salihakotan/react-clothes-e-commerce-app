import { Grid, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsAsync,
  selectProducts,
  selectProductsError,
  selectProductsStatus,
} from "../redux/productsSlice";
import ProductItem from "../components/ProductItem";

function Products() {
  const products = useSelector(selectProducts);
  const status = useSelector(selectProductsStatus);
  const error = useSelector(selectProductsError);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(getProductsAsync());
    }
  }, [dispatch, status]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{width:"70%"}}>
      <Heading as="h1">Products</Heading>


      {status === "loading" && <div>Loading...</div>}

      <Grid mt="40px" templateColumns="repeat(4, 1fr)" gap={6}>
        {products &&
          status === "succeeded" &&
          products.map((product, i) => {
            return <ProductItem key={i} product={product} />;
          })}
      </Grid>
    </div>
  );
}

export default Products;
