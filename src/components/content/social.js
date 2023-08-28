import React from 'react'
import { Icon } from './icons/index.js'
import { config } from '../../utils/main.js'

const URLS = config.urls
const COLORS = config.colors

const iconStyle = {
	padding: '0 .25em',
    color: COLORS.yellow,
    fontSize: '3rem'
}

export const SocialNav = () => {
  return (
    <nav style={{margin: '1rem auto'}} id="socialNav">
      <a id="facebookLink" href={URLS["facebook"]}><Icon iconName="faFacebook" style={iconStyle} /></a>
      <a id="instagramLink" href={URLS["instagram"]}><Icon iconName="faInstagram" style={iconStyle} /></a>
      <a id="twitterLink" href={URLS["twitter"]}><Icon iconName="faTwitter" style={iconStyle} /></a>
    </nav>
  )
}
