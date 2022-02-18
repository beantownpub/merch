import React from 'react'
import Slider from 'react-slick'
import { StyledImageSlider } from './styles'

const ImageList = (props) => {
    console.log('ImageList props: ' + props)
    const sliderList = props.images.map((image, index) =>
        <div  key={index}><img src={`${props.imagePath}/${image}`}  alt={image} /></div>
    )
    return (
        <Slider {...props.settings}>{sliderList}</Slider>
    )
}

export const ImageSlider = (props) => {
    return (
        <StyledImageSlider styles={props.sliderStyles} aria-labelledby="Image slider container">
            <ImageList settings={props.sliderSettings} images={props.images} imagePath={props.imagePath} />
        </StyledImageSlider>
    )
}
