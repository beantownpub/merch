import React from 'react'
import { SocialNav } from '../social'
import { StyledFooter } from './styles.js'

export const Footer = () => {
  const year = new Date().getFullYear()
  const gitHash = process.env.GIT_HASH
  const version = process.env.VERSION
  return (
    <StyledFooter>
      <footer>
        <h4>Est. 1999</h4>
        <img src="https://static.prod.beantownpub.com/img/logos/beantown_sign.svg" alt="Beantown Pub logo" />
        <h3>100 Tremont St. Boston MA</h3>
        <h2>Call: 617-426-0111</h2>
        <h2>Stay Connected</h2>
        <SocialNav/>
        <h2>{'© ' + year} Beantown Pub</h2>
        <h4>Commit: {gitHash} Version: {version}</h4>
      </footer>
    </StyledFooter>
  )
}
