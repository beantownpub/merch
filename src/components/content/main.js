import React from 'react'
import { InfoSection } from './common'
import { GrubHub } from './grubHub/main'
import { StyledContentContainer } from './styles'
import { HeroHeader } from './heroHeader/main'
import { config } from '../../utils/main'
const COLORS = config.colors


export const MainInfo = () => {
    return (
        <div>
            <HeroHeader>The only pub in the world where you can drink a cold Sam Adams' while viewing a cold Sam Adams</HeroHeader>
        <StyledContentContainer aria-labelledby="Content container" backgroundColor="beige">
            <InfoSection bgColor={COLORS.yellow}>
                <section>
                    <h1>Billiards, Cocktails, Beer, And Fine Pub Dining</h1>
                    <h5>Serving the heart of historic downtown Boston</h5>
                    <h2>Open Daily</h2>
                    <h3>8:30 AM to 2:00 AM</h3>
                    <h2>Serving Food Late Night<br /><a href='/menu'><span>See menu &#10148;</span></a></h2>
                    <GrubHub/>
                </section>
            </InfoSection>
            <InfoSection bgColor={COLORS.darkGray} fontColor={COLORS.yellow}>
                <section>
                    <h3>Gift Cards and Merchandise Available<br /></h3>
                    <h4><a href='/merch/items'><span>See merch &#10148;</span></a></h4>
                    <h4>Make your next private event a memorable one and book it at Beantown<br /><a href='/parties'>Learn more &#10148;</a></h4>
                </section>
            </InfoSection>
            <InfoSection bgColor={COLORS.yellow}>
                <section>
                    <h3>Want more info?<br /></h3>
                    <h2>See our frequently asked questions<br /><a href='/about'><span>FAQ &#10148;</span></a></h2>
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
