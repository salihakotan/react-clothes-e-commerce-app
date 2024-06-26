import { Box, Button, Heading, Text, useDisclosure } from "@chakra-ui/react";
import { Avatar, List } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  basketSelector,
  clearBasket,
  removeFromBasket,
} from "../redux/basketSlice";
import { AiFillCloseCircle } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OrderPanel from "../components/OrderPanel";

function Basket() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const basket = useSelector(basketSelector);

  const dispatch = useDispatch();

  const [total, setTotal] = useState(0);

  const handleClickRemoveFromBasket = (product) => {
    const item = basket.find((_item) => _item.id === product.id);

    if (item) {
      dispatch(removeFromBasket(product));
      console.log("removed from basket");
    }
  };

  const handleClickClearBasket = () => {
    dispatch(clearBasket());
  };

  const handleClickOrder = () => {
    onOpen();
  };

  useEffect(() => {
    const arrSum = basket.reduce((acc, { price }) => acc + price, 0);
    setTotal(arrSum);
    console.log("total: ", arrSum);
  }, [basket]);

  return (
    <div>
      <Heading mb="30px">Basket</Heading>
      <List
        className="demo-loadmore-list"
        // loading={initLoading}
        itemLayout="horizontal"
        dataSource={basket}
        renderItem={(item) => (
          <List.Item
            actions={[
              <button
                onClick={() => handleClickRemoveFromBasket(item)}
                style={{ color: "#333" }}
                key="product-item-clear"
              >
                <AiFillCloseCircle size={16} />
              </button>,
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
      {total > 0 && (
        <Text fontWeight="bold" textAlign="right">
          TOTAL: ${total}
        </Text>
      )}
      {basket.length > 0 && (
      <Box m="30px 0 30px 0" textAlign="right">
        <Button
          onClick={handleClickClearBasket}
          mr="20px"
          variant="outline"
          colorScheme="red"
        >
          Clear basket
        </Button>

        
          <Button onClick={handleClickOrder} colorScheme="green">
            Order
          </Button>
       

        <OrderPanel
          products={basket}
          total={total}
          finalRef={finalRef}
          initialRef={initialRef}
          isOpen={isOpen}
          onClose={onClose}
        />
      </Box>
    )}
    </div>
  );
}

export default Basket;
