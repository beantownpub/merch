import React from 'react'
// import styled from 'styled-components'
import { LinkButton, InfoSection } from './common'



export const MainInfo = (props) => {
    return (
        <div>
            <InfoSection bgColor='#fcba03'>
                <h1>Billiards, Cocktails, Beer, And Fine Pub Dining</h1>
                <h2>Open Daily</h2>
                <h3>8:30 AM to 2:00 AM</h3>
                <h4>The only pub in the world where you can drink a cold Sam Adams' while viewing a cold Sam Adams</h4>
                <h2>Serving Food Late Night</h2>
                <LinkButton color='#383838' fontColor='#fcba03'>See Menu</LinkButton>
            </InfoSection>
            <InfoSection bgColor="#383838" fontColor='#fcba03'>
                <h3>Gift Cards and Merchandise Available</h3>
                <LinkButton color='#fcba03'fontColor='black'>See Merch</LinkButton>
                <h2>Make Your Next Private Event A Memorable One And Book It At Beantown</h2>
                <LinkButton color='#fcba03'fontColor='black'>Private Parties</LinkButton>
            </InfoSection>
        </div>
    )
}

