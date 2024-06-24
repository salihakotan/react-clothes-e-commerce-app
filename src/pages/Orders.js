import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { ordersSelector } from "../redux/ordersSlice";
import { Avatar, List } from "antd";
import { Link } from "react-router-dom";

function Orders() {
  const orders = useSelector(ordersSelector);

  return (
    (<div>
      <Heading mb="30px">Orders</Heading>
      {orders && orders.length <= 0 && (
        <Text mb="30px" textAlign="center">
          No orders yet
        </Text>
      )}
      {orders && orders.length > 0 && (
        <List
          className="demo-loadmore-list"
          // loading={initLoading}
          itemLayout="horizontal"
          dataSource={orders}
          renderItem={(item) => (
            <List.Item
              actions={[
                <Link to={`/orders/${item.id}`}>
                  
                  <button style={{ color: "#333" }} key="product-item-clear">
                    Order details
                  </button>
                </Link>,
              ]}
            >
              <List.Item.Meta
                style={{ alignItems: "center" }}
                avatar={
                  <Avatar
                    style={{
                      borderRadius: "10px",
                      border: "1px solid gray",
                      padding: "5px",
                      height: "auto",
                      width: "70px",
                    }}
                    src={item.image}
                  />
                }
                title={
                  <Link style={{ fontSize: "16px" }} to={`/product/${item.id}`}>
                    {item.title}
                  </Link>
                }
              />
              <div style={{ fontWeight: "bold" }}>${item.price}</div>
            </List.Item>
          )}
        />
      )}
    </div>)
  );
}

export default Orders;

{
  /* orders.map((order)=> (
                <li>

                <Text>Name:{order.name}</Text>
                <Text>Address:{order.address}</Text>
                <Text>Date:{order.date}</Text>
                 <Text>Total:{order.totalPrice}</Text>
                 <Text>Products: {order.products.map((product)=> (

                    <div>
                    -----{product.title}
                    <img width="50px" src={product.image}/>
                    </div>

                 ))}</Text>
                

                </li>
            )) */
}
