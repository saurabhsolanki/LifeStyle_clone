import  "./footer.css"
import React from 'react'
import {  Img, Input, Link, Text } from "@chakra-ui/react"


const Footer = () => {
  return (
    <div className="footer">
        <div id="upperFooter">

            <div id="Upper_leftFooter">
                <Text fontSize='4xl' as='b'>Subscribe to our Awsome emails</Text>
                <Text fontSize="xs">Get our latest offers and news straight in your inbox</Text>
                <div id="footer_input">
                    <Input placeholder="Please enter an email address"/>
                    <button>Subscribe</button>
                </div>
            </div>
            <div id="upper_rightFooter">
                <Text fontSize='4xl' as='b'>Download our apps</Text>
                <Text fontSize='xs'>Shop our products and offers on-the-go</Text>
                <div>
                    <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/203px-Download_on_the_App_Store_Badge.svg.png?20170219160111" alt="apple logo" />
                    <img src="https://www.freepnglogos.com/uploads/play-store-logo-png/play-store-logo-nisi-filters-australia-11.png" alt="play store" />
                </div>
            </div>
        </div>
            <hr style={{marginTop:"20px",marginBottom:"40px"}}/>
        <div id="lowerFooter">
            <div id="footer_one">
                <Text fontSize="2xl" as='b'>Women</Text>
                <p>Tops</p>
                <p>Ethnicwear</p>
                <p>Botton</p>
                <p>Winterwear</p>
                <p>Lingerie</p>
                <p>Nightwear</p>
                <p>Beauty</p>
                <p>Watches & Sunglasses</p>
            </div>
            <div id="footer_two" >
            <Text fontSize="2xl" as='b'>Men</Text>
                <p>Tops</p>
                <p>Ethnicwear</p>
                <p>Botton</p>
                <p>Winterwear</p>
                <p>Sportwear</p>
                <p>Grooming</p>
                <p>Sunglasses</p>
                <p>Watches & Sunglasses</p>
            </div>
            <div id="footer_three">
            <Text fontSize="2xl" as='b'>Kids</Text>
                <p>Girls Clothing</p>
                <p>Boys Clothing</p>
                <p>Infants Girls</p>
                <p>Infants Boys</p>
                <p>Winterwear</p>
                <p>Add ons</p>
                <p>The Teen Shop</p>
                
            </div>
            <div id="footer_four">
            <Text fontSize="2xl" as='b'>Shoes & Bags</Text>
                <p>Women</p>
                <p>Men</p>
                <p>Boys</p>
                <p>Girsl</p>
                <p>Women Accessories</p>
                <p>Men Accessories</p>
                <p>Essential</p>
                
            </div>
            <div id="footer_five">
            <Text fontSize="2xl" as='b'>Beauty</Text>
                <p>Makeup Eyes</p>
                <p>Makeup Face</p>
                <p>Makeup Lips</p>
                <p>Makeup Nails</p>
                
                <p>Perfumes</p>
            </div>
        </div>
    </div>
  )
}

export default Footer