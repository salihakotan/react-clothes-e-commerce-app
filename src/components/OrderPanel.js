import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newOrder, ordersSelector } from '../redux/ordersSlice'
import { Button, FormControl, FormLabel, Input, Textarea, useDisclosure } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { message } from 'antd'
import { clearBasket } from '../redux/basketSlice'

function OrderPanel({products,total,initialRef,finalRef,onClose,isOpen}) {

  

   const [name,setName] = useState("")

   const [address,setAddress] = useState("")

    const dispatch = useDispatch()




        const handleClickOrder = () => {

          if(name.trim() === "" || name.length <= 2){
            message.error("Please enter your name correctly")
            return false
          }

          if(address.trim() ==="" || address.length <=2){
            message.error("Please enter your address correctly")
            return false
          }


            dispatch(newOrder({products:products,totalPrice:total,name,address}))

           if(products.length>1){
            dispatch(clearBasket())
           }
            
          onClose()
        }



  return (
    <div>

    <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Full name</FormLabel>
              <Input value={name} onChange={(e)=> setName(e.target.value)} ref={initialRef} placeholder='Full name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Address</FormLabel>
              <Textarea value={address} onChange={(e)=>setAddress(e.target.value)} placeholder='Address' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel  textAlign="right">Total: ${total}</FormLabel>
             
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleClickOrder} colorScheme='green' mr={3}>
              Order
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


    </div>
  )
}

export default OrderPanel