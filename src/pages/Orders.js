import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { ordersSelector } from "../redux/ordersSlice";
import { Avatar, List } from "antd";
import { Link } from "react-router-dom";

function Orders() {
  const truncate = (input) => {
    if (input) {
      return input.length > 20 ? `${input.substring(0, 20)}...` : input;
    }
  };

  const orders = useSelector(ordersSelector);

  return (
    <div>
      <Heading mb="30px">Orders</Heading>
      {orders && orders.length <= 0 && (
        <Text mb="30px" textAlign="center">
          No orders yet
        </Text>
      )}
      {orders && orders.length > 0 && (
        <List
        header={<div style={{display:"flex"}}>
        <div className="columnTitle">Date / Name / Address / Products / Total price / Details</div>
        </div>}
          className="demo-loadmore-list"
          // loading={initLoading}
          itemLayout="horizontal"
          dataSource={orders}
          renderItem={(item) => (
            <Link className="orderListItem" to={`/orders/${item.id}`}>
              <List.Item
                actions={[
                  <Link to={`/orders/${item.id}`}>
                    <button key="product-item-clear">Order details</button>
                  </Link>,
                ]}
              >
                <List.Item.Meta
                
                  style={{ alignItems: "center" }}
                  title={item.date}
                />
                <List.Item.Meta
                  style={{ alignItems: "center" }}
                  title={truncate(item.name)}
                />

                <List.Item.Meta
                  style={{ alignItems: "center" }}
                  title={truncate(item.address)}
                />
                <List.Item.Meta
                  style={{ alignItems: "center" }}
                  title={item.products.length}
                />
                <List.Item.Meta
                  style={{ alignItems: "center", fontWeight: "bold" }}
                  title={"$" + item.totalPrice}
                />
              </List.Item>
            </Link>
          )}
        />
      )}
    </div>
  );
}

export default Orders;
