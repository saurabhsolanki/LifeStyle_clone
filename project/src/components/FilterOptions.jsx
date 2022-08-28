import React from 'react'
import "../App.css"


import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
 
} from '@chakra-ui/react'

const FilterOptions = () => {
  return (
    <div id='filter'>

      <div className="first_filter">
      <Menu closeOnSelect={false}>
        <MenuButton as={Button}  px={20}
    py={2} >
          Price
        </MenuButton>
        <MenuList minWidth='240px'>
          <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
          <Slider aria-label='slider-ex-1' defaultValue={30} colorScheme='orange'>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
      </div>

      <div className="second_filter">
      <Menu closeOnSelect={false}>
  <MenuButton as={Button}   px={20}>
    Browse
  </MenuButton>
  <MenuList minWidth='240px'>
    <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
      <MenuItemOption value='asc'> New</MenuItemOption>
      <MenuItemOption value='desc'>40% OFF</MenuItemOption>
      <MenuItemOption value='desc'>20% OFF</MenuItemOption>
      <MenuItemOption value='desc'>30% OFF</MenuItemOption>
      <MenuItemOption value='desc'>2 At 40% OFF</MenuItemOption>
      <MenuItemOption value='desc'>70% OFF</MenuItemOption>
      <MenuItemOption value='desc'>2 At 60% OFF</MenuItemOption>
      <MenuItemOption value='desc'>15% OFF</MenuItemOption>
      <MenuItemOption value='desc'>2 At 15% OFF</MenuItemOption>
      <MenuItemOption value='desc'>10% OFF</MenuItemOption>
    </MenuOptionGroup>
  </MenuList>
</Menu>
      </div>

    <div className="third_filter">
    <Menu closeOnSelect={false}>
      <MenuButton as={Button}   px={20}>
            Brand
      </MenuButton>
      <MenuList minWidth='240px'>
        <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
          <MenuItemOption value='asc'> Addidas</MenuItemOption>
          <MenuItemOption value='desc'>Allen Solley</MenuItemOption>
          <MenuItemOption value='desc'>American Eagle</MenuItemOption>
          <MenuItemOption value='desc'>AMD</MenuItemOption>
          <MenuItemOption value='desc'>Bata</MenuItemOption>
          <MenuItemOption value='desc'>Biba</MenuItemOption>
          <MenuItemOption value='desc'>Puma</MenuItemOption>
          <MenuItemOption value='desc'>Nike</MenuItemOption>
          <MenuItemOption value='desc'>Reebook</MenuItemOption>
          <MenuItemOption value='desc'>Zara</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
    </div>

      <div className="forth_filter">
      <Menu closeOnSelect={false}>
        <MenuButton as={Button}   px={20}>
              Color Family
        </MenuButton>
        <MenuList minWidth='240px'>
          <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
            <MenuItemOption value='asc'> Blue</MenuItemOption>
            <MenuItemOption value='desc'>Pink</MenuItemOption>
            <MenuItemOption value='desc'>Black</MenuItemOption>
            <MenuItemOption value='desc'>White</MenuItemOption>
            <MenuItemOption value='desc'>Green</MenuItemOption>
            <MenuItemOption value='desc'>Brown</MenuItemOption>
            <MenuItemOption value='desc'>Orange</MenuItemOption>
            <MenuItemOption value='desc'>Purple</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
    </Menu>
      </div>

      {/* type */}
      <div className="fifth_filter">
      <Menu closeOnSelect={false}>
        <MenuButton as={Button}   px={20}>
              Type
        </MenuButton>
        <MenuList minWidth='240px'>
          <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
            <MenuItemOption value='asc'> Crew Neck</MenuItemOption>
            <MenuItemOption value='desc'>Straight</MenuItemOption>
            <MenuItemOption value='desc'>T-shirt</MenuItemOption>
            <MenuItemOption value='desc'>Polo Neck</MenuItemOption>
            <MenuItemOption value='desc'>Dress</MenuItemOption>
            <MenuItemOption value='desc'>Shirt</MenuItemOption>
            <MenuItemOption value='desc'>Jeans</MenuItemOption>
            <MenuItemOption value='desc'>Joggers</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
    </Menu>
      </div>

    {/* size */}
    <div className="sixth_filter">
    <Menu closeOnSelect={false}>
        <MenuButton as={Button}   px={20}>
              Size
        </MenuButton>
        <MenuList minWidth='240px'>
          <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
            <MenuItemOption value='asc'> 6</MenuItemOption>
            <MenuItemOption value='desc'>8</MenuItemOption>
            <MenuItemOption value='desc'>10</MenuItemOption>
            <MenuItemOption value='desc'>12</MenuItemOption>
            <MenuItemOption value='desc'>14</MenuItemOption>
            <MenuItemOption value='desc'>16</MenuItemOption>
            <MenuItemOption value='desc'>18</MenuItemOption>
            <MenuItemOption value='desc'>20</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
    </Menu>
    </div>


    {/* discount range */}
    <div className="seventh_filter">
    <Menu closeOnSelect={false}>
        <MenuButton as={Button}   px={20}>
              Discount Range
        </MenuButton>
        <MenuList minWidth='240px'>
          <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
            <MenuItemOption value='asc'> 60% and above</MenuItemOption>
            <MenuItemOption value='desc'>50% and above</MenuItemOption>
            <MenuItemOption value='desc'>40% and above</MenuItemOption>
            <MenuItemOption value='desc'>30% and above</MenuItemOption>
            <MenuItemOption value='desc'>20% and above</MenuItemOption>
            <MenuItemOption value='desc'>10% and above</MenuItemOption>
            <MenuItemOption value='desc'>Less than 10%</MenuItemOption>
            <MenuItemOption value='desc'>Less than 10%</MenuItemOption>
           
          </MenuOptionGroup>
        </MenuList>
    </Menu>
    </div>
    </div>
  )
}

export default FilterOptions
