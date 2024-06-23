import { Container, Heading } from '@chakra-ui/react'
import React from 'react'
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
      </ul>
    </nav>



    </div>
  )
}

export default Header