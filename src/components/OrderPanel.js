import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newOrder, ordersSelector } from '../redux/ordersSlice'

function OrderPanel({products,total}) {

    const dispatch = useDispatch()

    const orders = useSelector(ordersSelector)

    console.log("orders before: ", orders)


        const order = () => {

            dispatch(newOrder({products:products,totalPrice:total}))

            console.log("orders after: ", orders)

        }



  return (
    <div>OrderPanel
    
    <div>total: {JSON.stringify(total)}</div>

    
    {products && products.length>0 && (
        products.map((product,i)=> {
           return <div key={i}>TİTLE: {product.title}</div>
        })
    )}

    <button onClick={order}>ORDERRR</button>


    </div>
  )
}

export default OrderPanel