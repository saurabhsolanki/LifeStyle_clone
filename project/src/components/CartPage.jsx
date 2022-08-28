import { Text } from '@chakra-ui/react'
import React from 'react'
import Car, { ControlledCarousel } from './Car'
import  "./CartPage.css"

const CartPage = () => {
  return (
    <div>
      <div id="cartPage">
        <Text>FAHRENHEIT Men Solid Elasticated Track Pants</Text>
        <div id="cartPage_item">
            <div id="cartImage">
                <div id="cartImageLeft">
                    <img src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010715425-Grey-1000010715425_01-2100.jpg" alt="" />
                </div>
                <div id="cartImageRight">
                    <img src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000010715425-Grey-1000010715425_02-2100.jpg" alt="" />
                </div>
            </div>
            <div id="cartDetail">
                <Text fontSize='4xl'  color='tomato' > ₹ 1017</Text>
                <Text fontSize="sm"><Text as='del'>₹ 1595</Text> Save ₹ 578</Text>
                <Text fontSize="sm"  color='tomato'>Free Shipping on above INR 499</Text>
                <Text ><strong>Overview</strong></Text>
                <Text fontSize="sm">Designed with a solid surface, this pair of track pants are designed with an elastic waistline, drawstring, and insert pockets.</Text>
                <ul>
                    <li>Type : Track Pants</li>
                    <li>Design : Solid</li>
                    <li>Design : Solid</li>
                    <li>Fit : Regular</li>
                    <li>Rise : Mid-Rise</li>
                    <li>Care Instructions : Machine Wash</li>
                    <li>Country of Origin : India</li>
                    <li>Manufactured By : Fahrenheit Clothing (India) Pvt Ltd</li>
                    <li>Product : Track Pants</li>

                </ul>
                <hr />
                <button>ADD TO BASKET</button>
            </div>
        </div>
        <ControlledCarousel/>
      </div>
    </div>
  )
}

export default CartPage
