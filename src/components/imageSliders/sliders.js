import React from 'react'
import Slider from 'react-slick'

const imgPath = "/images/imgSlider"

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
                <div key={1}><img src={`${imgPath}/bt_pool_tables.jpeg`}  alt="img 1" /></div>
                <div key={2}><img src={`${imgPath}/bt_private_event_pt2.jpeg`}  alt="img 2" /></div>
                <div key={3}><img src={`${imgPath}/bt_private_event_pt4.jpeg`}  alt="img 3" /></div>
                <div key={4}><img src={`${imgPath}/elisha_brown_room.jpeg`}  alt="img 3" /></div>
            </Slider>
        </div>
    )
}
