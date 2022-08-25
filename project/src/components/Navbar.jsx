import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import App.css from '../App.css'
import "../App.css"

import { Button, ButtonGroup, Text,Input } from '@chakra-ui/react'

export default function Navbar() {

    const [text,setText]=useState("")
  return (
    <div>
    <div id='navbar'>
      <div className='nav_logo'>
        <img src="https://blog.lifestylestores.com/wp-content/uploads/2020/10/logo-lifestyle.png" alt="" />
      </div>
      <div id='nav_details'>
        <div className="nav_list"> <Link to="/">Women</Link></div>
        <div className="nav_list"><Link to="/">Men</Link></div>
        <div className="nav_list"><Link to="/">Kids</Link></div>
        <div className="nav_list"><Link to="/">Shoes and Bag</Link> </div>
        <div className="nav_list"><Link to="/">Beauty</Link></div>
      </div>
      <div className="search_input">
        <Input type="text" placeholder='What are you lookin for' value={text} onChange={(e)=>setText(e.target.value) }/>
      </div>
      <div className="right_nav">
        <div><Link to="/">More |</Link></div>
        <div><Link to="/">Login and SignUP</Link></div>
        <div><Link to="/"><img src="https://icon-library.com/images/wishlist-icon/wishlist-icon-0.jpg" alt="" /></Link></div>
        <div><img src="https://icon-library.com/images/bag-icon-png/bag-icon-png-7.jpg" alt="" /></div>
      </div>
    </div >
    <div className="nav_bottom">
    <Text fontSize='50px'>You are serached for"{text}"</Text>
    </div>
    {/* nav buttons */}
    <div className='nav_button'>
        <Text fontSize='2xl'>shop  for</Text>
    <ButtonGroup variant='outline' spacing='6'>
        <Button colorScheme='black'>Shoes and bag</Button>
        <Button colorScheme='black'>Women</Button>
        <Button colorScheme='black'>Men</Button>
        <Button colorScheme='black'>Kids</Button>
        <Button colorScheme='black'>Beauty</Button>
        <Button colorScheme='black'>Accessories</Button>
        <Button colorScheme='black'>Boys</Button>
    </ButtonGroup>
    </div>
    </div>
  )
}
