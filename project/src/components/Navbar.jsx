import React from 'react'
// import App.css from '../App.css'
import "../App.css"

export default function Navbar() {
  return (
    <div id='navbar'>
      <div className='nav_logo'>
        <img src="https://blog.lifestylestores.com/wp-content/uploads/2020/10/logo-lifestyle.png" alt="" />
      </div>
      <div id='nav_details'>
        <div className="nav_list">Women</div>
        <div className="nav_list">Men</div>
        <div className="nav_list">Kids</div>
        <div className="nav_list">Shoes and Bag</div>
        <div className="nav_list">Beauty</div>
      </div>
      <div className="search_input">
        <input type="text" placeholder='What are you lookin for' />
      </div>
      <div className="right_nav">
        <div>More</div>
        <div>Login/SignUp</div>
        <div>whislilst</div>
        <div>cart</div>
      </div>
    </div>
  )
}
