import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Box,
    
 

  } from '@chakra-ui/react'

  import { ChevronDownIcon } from '@chakra-ui/icons'

import style from "../components/nav.module.css"




const NavbarList = () => {
    
  return (
    <div className={style.nav}>
        <div className={style.comp}>
            <div className={style.logo}>
                
                <img  src="https://o.remove.bg/downloads/44a46023-f3f5-4939-9289-1afc258fbabc/logo-removebg-preview.png"/>
                
            </div>
            <div className={style.box}>
                <Menu>
                    <MenuButton borderRadius="none"  _hover={{ color: 'green', borderBottom:'3px solid green',}} bg="none" mr="35px" as={Button} rightIcon={<ChevronDownIcon />}>
                        product
                    </MenuButton>
                    <MenuList color="black" display="flex">
                        <Box>
                        <MenuItem>Take a Tour</MenuItem>
                        <MenuItem>Features</MenuItem>
                        <MenuItem>Project Templates</MenuItem>
                        <MenuItem>App & Integrations</MenuItem>
                        <MenuItem>Security</MenuItem>
                        <MenuItem>Watch Live Demo</MenuItem>
                        </Box>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton borderRadius="none"  _hover={{ color: 'green', borderBottom:'3px solid green',}} bg="none" mr="35px" as={Button}  rightIcon={<ChevronDownIcon />}>
                        Solution
                    </MenuButton>
                    <MenuList color="black" display="flex">
                        <Box>
                        <MenuItem color="grey">TEAMS</MenuItem>
                        <MenuItem>Project MAnagers</MenuItem>
                        <MenuItem>Marketing</MenuItem>
                        <MenuItem>Creative</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Professional Services</MenuItem>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Product Development</MenuItem>
                        <MenuItem>Business Operations</MenuItem>
                        <MenuItem>All Teams</MenuItem>
                        </Box>
                        <Box>
                        <MenuItem color="grey">USE CASES</MenuItem>
                        <MenuItem>Enterprise Project Management</MenuItem>
                        <MenuItem>Agency Project Management Software</MenuItem>
                        <MenuItem>Agile Project Management Software</MenuItem>
                        <MenuItem>Portfolio Management Software</MenuItem>
                        <MenuItem>Resource Management </MenuItem>
                        <MenuItem>Work From Home Anywhere</MenuItem>
                        <MenuItem>All Use Cases</MenuItem>
                        </Box>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton borderRadius="none"  _hover={{ color: 'green', borderBottom:'3px solid green',}} bg="none" mr="35px" as={Button}>
                        price
                    </MenuButton>
                </Menu>
                <Menu>
                    <MenuButton borderRadius="none"  _hover={{ color: 'green', borderBottom:'3px solid green',}} bg="none" mr="35px" as={Button} rightIcon={<ChevronDownIcon />}>
                        Resources
                    </MenuButton>
                    <MenuList color="black" display="flex">
                        <Box>
                        <MenuItem color="grey">LEARN MORE</MenuItem>
                        <MenuItem>Resources</MenuItem>
                        <MenuItem>Wrike Blog</MenuItem>
                        <MenuItem>WEbinars</MenuItem>
                        <MenuItem>Custosmer Stories</MenuItem>
                        <MenuItem>Eductaional Guides</MenuItem>
                        </Box>
                        
                        <Box>
                        <MenuItem color="grey">ABOUT</MenuItem>
                        <MenuItem>Partners</MenuItem>
                        <MenuItem>Company</MenuItem>
                        <MenuItem>Newssroom</MenuItem>
                        <MenuItem>Events</MenuItem>
                        </Box>
                        <Box>
                        <MenuItem color="grey">SUPPORT</MenuItem>
                        <MenuItem>Professional Services</MenuItem>
                        <MenuItem>Help Center</MenuItem>
                        <MenuItem>Community</MenuItem>
                        <MenuItem>Support PAckages</MenuItem>
                        </Box>
                    </MenuList>
                </Menu>
            </div>
        </div>
        <div className={style.comp2}>
            <Button bg="none" mr="35px">Contact Sales</Button>
            <Menu bg= '#042F39'>
                    <MenuButton borderRadius="none"  _hover={{ color: 'green', borderBottom:'3px solid green',}} bg="none" mr="35px" as={Button} rightIcon={<ChevronDownIcon />}>
                        En
                    </MenuButton>
                    <MenuList color="black" display="flex">
                        <Box>
                        <MenuItem>English</MenuItem>
                        <MenuItem>Dansk</MenuItem>
                        <MenuItem>Deutsch</MenuItem>
                        <MenuItem>Espanol</MenuItem>
                        <MenuItem>Bahasa Indonesia</MenuItem>
                        <MenuItem>Portugues</MenuItem>
                        <MenuItem>Svenska</MenuItem>
                        </Box>
                        <Box>
                        <MenuItem>Italiano</MenuItem>
                        <MenuItem>Bahasa Melayu</MenuItem>
                        <MenuItem>Nederlands</MenuItem>
                        <MenuItem>Norsk</MenuItem>
                        <MenuItem>Polski</MenuItem>
                        </Box>
                    </MenuList>
                </Menu>
                <Button borderRadius="none"  _hover={{ color: 'green', borderBottom:'3px solid green',}} bg="transparent" mr="35px">Login</Button>
                <Button _hover={{ color: 'white'}} bg="#04ba71" color="white" mr="35px">Start For Free</Button>
        </div>
    </div>
  )
}

export default NavbarList