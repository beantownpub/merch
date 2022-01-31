import React from 'react'
import { SocialIcon } from '../icons'

import { config } from '../../utils/main'
const URLS = config.urls

const iconStyle = {
	padding: '0 .25em',
    color: '#fcba03',
    fontSize: '3rem'
}

export const SocialNav = () => {
    return (
        <nav style={{margin: '1rem auto'}}>
            <a href={URLS["facebook"]}><SocialIcon iconName="faFacebook" style={iconStyle} /></a>
            <a href={URLS["instagram"]}><SocialIcon iconName="faInstagram" style={iconStyle} /></a>
            <a href={URLS["twitter"]}><SocialIcon iconName="faTwitter" style={iconStyle} /></a>
        </nav>
    )
}
