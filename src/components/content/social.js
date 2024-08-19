import React from "react"
import { Icon } from "@jalgraves/react-components-library"
import { config } from "../../utils/main.js"

const URLS = config.urls
const COLORS = config.colors

const iconStyle = {
	padding: "0 .25em",
  color: COLORS.yellow,
  fontSize: "3rem"
}

export const SocialNav = () => {
  return (
    <nav style={{margin: "1rem auto"}} id="socialNav">
      <a id="facebookLink" aria-label="Visit our Facebook page" href={URLS["facebook"]}><Icon iconName="faFacebook" style={iconStyle} /></a>
      <a id="instagramLink" aria-label="See our posts on instagram" href={URLS["instagram"]}><Icon iconName="faInstagram" style={iconStyle} /></a>
      <a id="twitterLink" aria-label="Visit our Twitter feed" href={URLS["twitter"]}><Icon iconName="faTwitter" style={iconStyle} /></a>
    </nav>
  )
}
