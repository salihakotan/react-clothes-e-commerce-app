import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { ordersSelector } from '../redux/ordersSlice'

function Orders() {


    const orders = useSelector(ordersSelector)

    


  return (
    <div>
        <Heading mb="30px">Orders</Heading>

        {orders && orders.length<= 0 && (
            <Text mb="30px" textAlign="center">No orders yet</Text>
        )}

        {orders && (
            orders.map((order)=> (
                <li>

                <Text>Date:{order.date}</Text>
                 <Text>Total:{order.totalPrice}</Text>
                 <Text>Products: {order.products.map((product)=> (<div>-----{product.title}</div>))}</Text>
                

                </li>
            ))
        )}
    </div>
  )
}

export default Orders