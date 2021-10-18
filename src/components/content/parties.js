import React from 'react'
import { InfoSection } from './common'
import { ContactForm } from '../contact/main'
import { ImageSlider } from '../imageSliders/main'
const CONFIG = require('./config.json')
const COLORS = CONFIG.colors


const images = [
    "bt_pool_tables.jpeg",
    "bt_private_event_1.jpeg",
    "bt_private_event_pt2.jpeg",
    "bt_private_event_pt4.jpeg",
    "bt_private_event_2.jpeg",
    "elisha_brown_room.jpeg",
    "elisha_brown_room2.jpeg"
]

const sliderStyles = {
    marginTop: "1rem",
    marginRight: "unset",
    marginLeft: "unset",
    width: "95vw",
    img: {}
}

const sliderSettings = {
    dots: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 8500,
    pauseOnHover: false,
    swipeToSlide: true,
    fade: true,
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
}


export const PrivateParties = () => {
    return (
        <div>
        <InfoSection bgColor={COLORS.yellow} marginTop='3rem'>
            <section>
                <h1>Private Parties</h1>
                <article>
                Make your next private event a memorable one. Beantown Pub offers a variety of spaces that are perfect for accomadating small gatherings
                or corporate events. Choose from spaces with single, multiple, or no pool tables. Our private event menu offers a variety of freshly
                prepared delicious appetizers all the way up to a full buffet with several entrees.
                </article>
                <ContactForm/>
                
            </section>
            <ImageSlider images={images} imagePath="/images/imgSlider" sliderSettings={sliderSettings} sliderStyles={sliderStyles} />
        </InfoSection>
        </div>
    )
}
