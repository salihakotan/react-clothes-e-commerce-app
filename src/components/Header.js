import { Container, Heading } from '@chakra-ui/react'
import React from 'react'
import { AiFillHeart, AiFillShop, AiFillShopping } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='headerArea' m="10px">
      <Heading p="30px" as="h1">Clothes e-Commerce</Heading>


    <nav>
      <ul className='headerMenu'>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li className='pink' style={{float:"right"}}>
        <AiFillHeart className='starIcon' fontSize="22px" color="#ff3f78"/>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li  className='pink'  style={{float:"right"}}>
       <AiFillShopping className='starIcon' fontSize="22px" color="#ff3f78"/>
          <Link to="/basket">Basket</Link>
        </li>
      </ul>
    </nav>



    </div>
  )
}

export default Header