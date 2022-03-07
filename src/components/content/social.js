import React from 'react'
import { Icon } from "./icons/index"

import { config } from '../../utils/main'
const URLS = config.urls
const COLORS = config.colors

const iconStyle = {
	padding: '0 .25em',
    color: COLORS.yellow,
    fontSize: '3rem'
}

export const SocialNav = () => {
  return (
    <nav style={{margin: '1rem auto'}}>
      <a href={URLS["facebook"]}><Icon iconName="faFacebook" style={iconStyle} /></a>
      <a href={URLS["instagram"]}><Icon iconName="faInstagram" style={iconStyle} /></a>
      <a href={URLS["twitter"]}><Icon iconName="faTwitter" style={iconStyle} /></a>
    </nav>
  )
}
