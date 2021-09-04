import React from 'react'
import { InfoSection } from './common'
import { Map } from '../map'
import { ContactForm } from '../contact/main'
import { LinkButton } from './common'
import { GrubHub } from '../grubhub'


export const MainInfo = () => {
    return (
        <div>
            <InfoSection bgColor='#fcba03'>
                <section>
                    <h1>Billiards, Cocktails, Beer, And Fine Pub Dining</h1>
                    <h5>Serving the heart of historic downtown Boston</h5>
                    <h2>Open Daily</h2>
                    <h3>8:30 AM to 2:00 AM</h3>
                    <h2>Serving Food Late Night<br /><a href='/menu'><span>See menu &#10148;</span></a></h2>
                    <GrubHub/>
                </section>
            </InfoSection>
            <InfoSection bgColor="#383838" fontColor='#fcba03'>
                <section>
                    <h3>Gift Cards and Merchandise Available<br /><a href='/merch/items'>See merch &#10148;</a></h3>
                    <h4>Make your next private event a memorable one and book it at Beantown<br /><a href='/parties'>Learn more &#10148;</a></h4>
                </section>
            </InfoSection>
        </div>
    )
}

export const PrivateParties = () => {
    return (
        <InfoSection bgColor='#fcba03'>
            <section>
                <h1>Private Parties</h1>
                <article>
                Make your next private event a memorable one. Beantown Pub offers a variety of spaces that are perfect for accomadating small gatherings
                or corporate events. Choose from spaces with single, multiple, or no pool tables. Our private event menu offers a variety of freshly
                prepared delicious appetizers all the way up to a full buffet with several entrees.
                </article>
                <ContactForm/>
            </section>
        </InfoSection>
    )
}

export const AboutInfo = () => {
    return (
        <div>
            <InfoSection bgColor='#fcba03'>
                <section>
                    <h1>See Yah Laatah&trade;!</h1>
                    <article>
                        Nestled in the heart of downtown Boston and conveniently located on the famous Freedom Trail, Beantown is a classic American pub
                        offering a casual drinking atmosphere and fine pub dining. Whether you’re looking for an ice cold beer after work, a great place
                        to meet friends, or somewhere to feel at home while you’re traveling - Beantown Pub is the place to be!
                    </article>
                </section>
            </InfoSection>
            <InfoSection bgColor="#383838" fontColor='#fcba03'>
                <section>
                    <h3>Frequently Asked Questions</h3>
                    <h4>Do you accept credit cards yes?</h4>
                    <p>Yes.</p>
                    <h4>Do you take reservations?</h4>
                    <p>No, but we do offer private parties for larger gatherings.</p>
                    <h4>What time do you serve food 'til?</h4>
                    <p>1:00 am, though subject to change based on demand.</p>
                    <h4>Is the bar 21 plus?</h4>
                    <p>Before 6:00 pm all ages are welcome, after 6:00 21 plus only.</p>
                    <h4>How many t.v.s do you have?</h4>
                    <p>A lot! There are two large projection screens in the main pool area and many big screens scattered throughout the rest of the bar.</p>
                    <h4>Can you put my game on?</h4>
                    <p>Most likely, if it's available.</p>
                    <h4>Do you have takeout?</h4>
                    <p>Yes</p>
                    <h4>How much does pool cost?</h4>
                    <p>Pool tables are coin operated and are &#65284;2.50 a game, there are change machines located in the pool area. Pool tables are first come first serve.</p>
                    <h4>Can I have a job?</h4>
                    <p>If you would like to apply for a job please come see us in person.</p>
                </section>
            </InfoSection>
        </div>
    )
}

export const ContactInfo = () => {
    const api_key = "AIzaSyAXB15L0ZUglrIv_DlWz7XrVSQ0g6lGiwI"
    return (
        <div>
        <InfoSection bgColor='#fcba03'>
            <section>
                <h1>Contact Beantown</h1>
                <h3>Call</h3>
                <h2>617-426-0111</h2>
                <h3>Mailing Address</h3>
                <h2>100 Tremont Street<br />Boston MA, 02108</h2>
                <h3>Email</h3>
                <h2>BeantownPubBoston@gmail.com</h2>
                <h6>Bosworth Place Inc. Beantown Pub DBA</h6>
            </section>
        </InfoSection>
        <InfoSection bgColor='#383838'>
            <Map
                isMarkerShown
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${api_key}&v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `225px`, maxWidth: `80%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </InfoSection>
        </div>
    )
}

export const ErrorPage = () => {
    return (
        <div>
            <InfoSection bgColor='#fcba03'>
                <section>
                    <h1>See Yah Laatah&trade;!</h1>
                    <h2>Sorry, somethin' aint right</h2>
                    <h2>Requested page is nowhere to be found on the server</h2>
                </section>
            </InfoSection>
        </div>
    )
}
