import React from 'react'
import { config } from '../../utils/main.js'
import { StyledCloseMenu, StyledHamburger } from './styles.js'
import * as SLIDE from '../../utils/menuSlide.js'

const STATIC_URL = config.urls.static

export function toggleMenu(action) {
  return (
    <StyledHamburger>
      {action === "open" &&
        <button className="hamburger" id="open_menu" onClick={() => SLIDE.menuOpen()}>Open Menu</button>
      }
      {action === "close" &&
        <StyledCloseMenu><button className="menu_close" id="close_menu" onClick={() => SLIDE.menuClose()}>Close Menu</button></StyledCloseMenu>
      }
    </StyledHamburger>
  )
}

export const SlideMenuLogo = () => {
  return (
    <div id="slideMenuLogo">
      <img src={`${STATIC_URL}/img/logos/beantown_script_logo.svg`}  alt="Beantown logo" />
    </div>
  )
}
