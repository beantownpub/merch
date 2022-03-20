import React from 'react'
import Slider from 'react-slick'
import { StyledImageSlider } from './styles'
const path = require('path')


export const ImageList = (props) => {
  console.log(`File: ${path.resolve('.')}`)
  console.log("ImageList")
  console.log(props.images)
  const sliderList = props.images.map((image, index) =>
    <div  key={index}><img src={`${props.imagePath}/${image || props.imgName}`}  alt={image} /></div>
  )
  return (
    <Slider {...props.settings}>{sliderList}</Slider>
  )
}

export const SlideList = (props) => {
  const renderItems = (items) => {
    console.log(items.length)
    const sliderList = []
    let cnt = 0
    for (const item of Object(items)) {
      console.log(`SlideList Item ${item}`)
      sliderList.push(
        <div  key={cnt}><img src={`${props.imagePath}/${item}`}  alt={item} /></div>
      )
      cnt++
    }
    return (
      <Slider {...props.settings}>{sliderList}</Slider>
    )
  }

  return (
    <div>
        {renderItems(props.images)}
    </div>
  )
}

export const ImageSlider = (props) => {
  return (
    <StyledImageSlider styles={props.sliderStyles} aria-labelledby="Image slider container">
      <SlideList settings={props.sliderSettings} images={props.images} imagePath={props.imagePath} />
    </StyledImageSlider>
  )
}
