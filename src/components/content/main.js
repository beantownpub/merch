import React from 'react'
import { InfoSection } from './common'
import { GrubHub } from './grubHub/main'
import { StyledContentContainer } from './styles'
import { HeroHeader } from './heroHeader/main'
import { config } from '../../utils/main'
import { sendEvent } from '../kafka/index'
import { ImageSlider } from '../imageSliders/main'
const COLORS = config.colors
const STATIC_PATH = `${config.urls.static}/img/merch`
const SLIDER_STYLES = {
  buttonColor: COLORS.yellow,
  margin: "unset",
  img: {
    borderRadius: "6px"
  }
}

const SLIDER_SETTINGS = {
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
const SLIDER_IMAGES = [
  "new_sam_adams_shirt_back.png",
  "scripted_one_side_small.png",
  "old_sam_adams_shirt_back.png"
]
export const MainInfo = () => {
  window.addEventListener('click', (event) => {
    sendEvent(event)
  })
  return (
    <div id="mainInfo">
      <HeroHeader image="granary_heroheader.jpeg">The only pub in the world where you can drink a cold Sam Adams' while viewing a cold Sam Adams</HeroHeader>
      <StyledContentContainer id="mainInfoContainer" aria-details="Content container" backgroundColor="beige">
        <InfoSection bgColor={COLORS.yellow} slug="hours-section">
          <section id="hoursSection">
            <h1>Billiards, Cocktails, Beer, And Fine Pub Dining</h1>
            <h5>Serving the heart of historic downtown Boston</h5>
            <h2>Open Daily</h2>
            <h3>8:30 AM to 2:00 AM</h3>
            <h2>Serving Food Late Night<br /><a href='/menu'><span>See menu &#10148;</span></a></h2>
            <GrubHub/>
          </section>
        </InfoSection>
        <InfoSection bgColor={COLORS.darkGray} fontColor={COLORS.yellow} slug="gift-cards-merch-section">
          <section id="giftCardsMerchSection">
            <h3>Gift Cards and Merchandise Available<br /></h3>
            <ImageSlider images={SLIDER_IMAGES} imagePath={STATIC_PATH} sliderSettings={SLIDER_SETTINGS} sliderStyles={SLIDER_STYLES} />
            <h4><a id="merchRef" href='/merch/items'><span>Shop now &#10148;</span></a></h4>
            <h4>Make your next private event a memorable one and book it at Beantown<br /><a id="partiesRef" href='/parties'>Learn more &#10148;</a></h4>
          </section>
        </InfoSection>
        <InfoSection bgColor={COLORS.yellow} slug="faq-section">
          <section id="faqSection">
            <h3>Want more info?<br /></h3>
            <h2>See our frequently asked questions<br /><a id="aboutRef" href='/about'><span>FAQ &#10148;</span></a></h2>
          </section>
        </InfoSection>
      </StyledContentContainer>
    </div>
  )
}

export const ErrorPage = () => {
  return (
    <StyledContentContainer aria-labelledby="Content container">
      <InfoSection bgColor={COLORS.yellow}>
        <section>
          <h1>See Yah Laatah&trade;!</h1>
          <h2>Sorry, somethin' aint right</h2>
          <h2>Requested page is nowhere to be found on the server</h2>
        </section>
      </InfoSection>
    </StyledContentContainer>
  )
}
