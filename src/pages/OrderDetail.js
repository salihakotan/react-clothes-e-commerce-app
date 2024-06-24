import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { orderSelector } from '../redux/ordersSlice'
import { Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'

function OrderDetail() {


    

    const {id} = useParams()

    const order = useSelector(state => state.orders.items.find((item)=>item.id ? item.id === id : ""))


  return (
    <div>
        <Heading mb="30px" as="h1">Order detail</Heading>


        <Text className='orderInfoField'><b>Date: </b>{order.date}</Text>
        <Text className='orderInfoField'><b>Full name: </b> {order.name}</Text>
        <Text className='orderInfoField'><b>Address: </b>{order.address}</Text>
        <div className='orderInfoField'><b>Products:</b>


        {order.products && (
            <Grid>
                {order.products.map((product,i)=> {
                   return <GridItem mt="15px" gap={5} templateColumns="repeat(4, 1fr)" className='productsGridItem orderInfoField' key={i}>
                   <Image width="50px" src={product.image}/>
                        <Text >{product.id}</Text>
                      

                        <Text>{product.title}</Text>

                    </GridItem>
                })}
            </Grid>
        )}

        </div>

    </div>
  )
}

export default OrderDetail