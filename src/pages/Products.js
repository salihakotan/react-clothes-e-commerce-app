import { Heading } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsAsync, selectProducts, selectProductsError, selectProductsStatus } from '../redux/productsSlice'

function Products() {


    const products = useSelector(selectProducts)
    const status = useSelector(selectProductsStatus)
    const error = useSelector(selectProductsError)

    const dispatch = useDispatch()



    useEffect(()=> {
        if(status ==="idle"){
            dispatch(getProductsAsync())
        }
    },[dispatch,status])


    if(error) {
        return <div>Error: {error}</div>
    }


  return (
    <div>


    <Heading as="h1">Products</Heading>


    {
        status ==="loading" && <div>Loading...</div>
    }

    {
        products && status ==="succeeded" && (
            products.map((product,i)=> {
                return <div key={i}>{product.title}</div>
            })
        )
    }


    </div>
  )
}

export default Products