import styled from 'styled-components'
import { config } from '../../../utils/main'
const COLORS = config.colors
const FONTS = config.fonts

export const StyledFooter = styled.div`
    display: flex;
    flex-flow: column wrap;
    height: 0;
    footer {
      background: ${COLORS.darkGray};
      border-radius: 4px;
      color: ${COLORS.white};
      font-family: ${FONTS.footer};
      letter-spacing: .2em;
      line-height: 200%;
      margin: auto;
      outline: 2px solid ${COLORS.yellow};
      outline-offset:-1.5rem;
      padding: 5rem;
      position: relative;
      text-transform: uppercase;
      text-align: center;
      text-shadow: .1em .15em .35em ${COLORS.black};
      width: 100%;
    }
    img {
        margin: auto;
        padding: .5rem 0;
        max-width: 20rem;
    }
    h2 {
        margin: 1rem auto;
    }
    h3 {
        margin: auto;
        padding: .5rem 0;
        font-size: 1.65em;
    }
    h4 {
        margin: auto;
        padding: 1rem 0;
        font-family: ${FONTS.script};
        font-size: 2rem;
        color: ${COLORS.yellow};
        text-transform: capitalize;
        letter-spacing: none;
    }
`
