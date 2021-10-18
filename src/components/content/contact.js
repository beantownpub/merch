import React from 'react'
import { InfoSection } from './common'
import { Map } from './map'

export const ContactInfo = () => {
    const api_key = "AIzaSyAXB15L0ZUglrIv_DlWz7XrVSQ0g6lGiwI"
    return (
        <div>
        <InfoSection bgColor='#fcba03' marginTop='3rem'>
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
