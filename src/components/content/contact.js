import React from 'react'
import { sendEvent } from '../kafka/index.js'
import { ContentContainer } from './container.js'

export const ContactInfo = () => {
  window.addEventListener('click', (event) => {
    sendEvent(event)
  })
  return (
    <ContentContainer 
      margin="5rem auto"
      h2Margin="unset"
      h2TextAlign="left" 
      h3TextAlign="left"
      h3Margin="unset"
      maxWidth="500px"
    >
      <h1>Contact Beantown</h1>
      <h3>Call</h3>
      <h2>617-426-0111</h2>
      <h3>Mailing Address</h3>
      <h2>100 Tremont Street<br />Boston MA, 02108</h2>
      <h3>Email</h3>
      <h4>BeantownPubBoston@gmail.com</h4>
      <h6>Bosworth Place Inc. Beantown Pub DBA</h6>
    </ContentContainer>
  )
}
