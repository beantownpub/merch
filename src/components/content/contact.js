import React from 'react'
import { InfoSection } from './common'
import { Map } from './map'
import { config } from '../../utils/main'
import { sendEvent } from '../kafka/index'

const COLORS = config.colors

export const ContactInfo = () => {
  window.addEventListener('click', (event) => {
    sendEvent(event)
  })
  const apiKey = process.env.GOOGLE_API_KEY
  return (
    <div id="contactInfo">
      <InfoSection bgColor={COLORS.yellow} marginTop='3rem' slug="contact-info">
        <section id="contactSection">
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
      <InfoSection bgColor={COLORS.backgroundGray}>
        <Map
            isMarkerShown
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `225px`, maxWidth: `80%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
        />
      </InfoSection>
    </div>
  )
}
