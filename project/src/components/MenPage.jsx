import React, { useEffect, useState } from 'react'
import products from "./Products"
import "../App.css"
import FilterOptions from './FilterOptions'
import axios from "axios"
import { Link, Navigate } from 'react-router-dom'
import { ControlledCarousel } from './Car'


const MenPage = () => {
  const [data,setData]=useState([])
  const getData=()=>{
     axios(`https://fakestoreapi.com/products`).then((res)=>setData(res.data))
  }
  console.log(data)

  function directTo(){
    return <Navigate to="/cartPage" />;
  }

  useEffect(()=>{
    getData()
  },[])
    
  return (
    <div>
      <FilterOptions/>
    <div id="products">
    {  products.products.map((item) => {
        return(<Link to="/cartPage">
        <div key={item.id}>
            <img src={item.image} alt="" height="100px" width="100%"/>
            <h2>₹ {item.price}</h2>
                <p>{item.title}</p>
        </div>
        </Link>)
      })}
    </div>
    <div style={{marginTop:"100px", marginBottom:"100px"}}>
    <ControlledCarousel/>
    </div>
    </div>
  )
}

export default MenPage


//<Link to="/cartPage"><h2>₹ {item.price}</h2></Link>
// "id": 1,
// "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "price": 109.95,
// "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
// "category": "men's clothing",
// "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",