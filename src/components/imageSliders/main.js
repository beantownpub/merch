import React from 'react'
import * as Slick from 'react-slick'
import { StyledImageSlider } from './styles.js'
const Slider = Slick.default
// console.log("SLIDER")
// console.log(Object.keys(Slider.default))
const SlideList = (props) => {
  console.log(`imagePath: ${props.imagePath}`)
  const renderItems = (items) => {
    const sliderList = []
    let cnt = 0
    for (const item of Object(items)) {
      // console.log(item)
      sliderList.push(
        <div key={cnt}><img src={`${props.imagePath}/${item}`}  alt={item} /></div>
      )
      cnt++
    }
    console.log(sliderList)
    return (
      <div>
        {sliderList}
      </div>
    )
  }
  // {renderItems(props.images)}
  return (
    <div aria-labelledby="SlideList images container">
      <h1>What the fuck?</h1>
      {renderItems(props.images)}
    </div>
  )
}



// const sliderStyles = {
//   display: "flex",
//   marginTop: "1rem",
//   marginRight: "unset",
//   marginLeft: "unset",
//   width: "95vw",
//   img: {}
// }
//<StyledImageSlider styles={props.sliderStyles} aria-labelledby="Image slider container">
//      <SlideList settings={props.sliderSettings} images={props.images} imagePath={props.imagePath} />
//    </StyledImageSlider>
let ImageSlider = (props) => {
  console.log(`ImageSliderProps: ${props}`)
  return (
    <StyledImageSlider styles={props.sliderStyles} aria-labelledby="Image slider container">
      <SlideList settings={props.sliderSettings} images={props.images} imagePath={props.imagePath} />
    </StyledImageSlider>
  )
}

export default ImageSlider
