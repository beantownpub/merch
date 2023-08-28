import React from "react"
import Slider from "react-slick"
import { StyledImageSlider } from "./styles.js"

export const SlideList = (props) => {
  console.log(props)
  const renderItems = (items) => {
    const sliderList = []
    let cnt = 0
    for (const item of Object(items)) {
      console.log(item)
      sliderList.push(
        <div  key={cnt}><img src={`${props.imagePath}/${item}`}  alt={item} /></div>
      )
      console.log(sliderList)
      cnt++
    }
    return (
      <Slider {...props.settings}>{sliderList}</Slider>
    )
  }

  return (
    <div aria-labelledby="SlideList images container">
      {renderItems(props.images)}
    </div>
  )
}

export const ImageSlider = (props) => {
  console.log("ImageSlider")
  console.log(props)
  return (
    <StyledImageSlider styles={props.sliderStyles} aria-labelledby="Image slider container">
      <SlideList settings={props.sliderSettings} images={props.images} imagePath={props.imagePath} />
    </StyledImageSlider>
  )
}
