import React from 'react'
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react'

const FilterOptions = () => {
  return (
    <div id='filter'>

      <div className="first_filter">
      <Slider aria-label='slider-ex-1' defaultValue={30} colorScheme='orange'>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      </div>


    </div>
  )
}

export default FilterOptions
