import React from 'react'
import { StyledGrubHubLink } from './styles.js'

export const GrubHub = () => {
  console.log('wtf')
  return (
    <div id="grubhub"
      className="gh-button-ifrm"
      data-customer-id="2287522"
      data-restaurant-name="Beantown Pub"
      data-button-type="branded"
      data-button-color="red"
      data-button-size="large"
      data-env="prod"
      data-url="beantown-pub-100-tremont-st-boston"
      data-tracking-id="2287522"
      data-restaurant-address="100 Tremont St, Boston MA, 02108"
      data-version="1.0"
      data-link-type="gh">
    </div>
  )
}

export const GrubHubLink = () => {
  return (
    <StyledGrubHubLink>
      <a href="https://www.grubhub.com/restaurant/beantown-pub-100-tremont-st-boston/2287522?utm_source=grubhub_web&utm_medium=content_owned&utm_campaign=menushare&utm_content=share-link">Order From GrubHub</a>
    </StyledGrubHubLink>
  )
}
