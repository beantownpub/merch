import React from 'react'
import Slider from 'react-slick'

const imgPath = 'https://static.dev.beantownpub.com/img/sliders/main/'

const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5500,
    pauseOnHover: false,
    swipeToSlide: true,
    fade: true,
    infinite: true,
    arrows: true,
    slidesToShow: 1
}

export const FadeSlider = () => {
    return (
        <div className='wtf'>
            <Slider {...settings}>
                <div key={1}><img src={`${imgPath}beantown_main_slider_01.jpg`}  alt="img 1" /></div>
                <div key={2}><img src={`${imgPath}beantown_main_slider_02.jpg`}  alt="img 2" /></div>
                <div key={3}><img src={`${imgPath}beantown_main_slider_03.jpg`}  alt="img 3" /></div>
                <div key={4}><img src={`${imgPath}beantown_main_slider_04.jpg`}  alt="img 3" /></div>
                <div key={5}><img src={`${imgPath}beantown_main_slider_05.jpg`}  alt="img 3" /></div>
                <div key={6}><img src={`${imgPath}beantown_main_slider_06.jpg`}  alt="img 3" /></div>
                <div key={7}><img src={`${imgPath}beantown_main_slider_07.jpg`}  alt="img 3" /></div>
            </Slider>
        </div>
    )
}
