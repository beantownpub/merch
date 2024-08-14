import styled from 'styled-components'
import { config } from '../../../utils/main.js'

const COLORS = config.colors
const FONTS = config.fonts

export const StyledGrubHubLink = styled.div`
  display: flex;
  a {
    margin: 1rem 0;
    padding: 1rem;
    width: max-content;
    border: none;
    border-radius: .3rem;
    font-family: ${FONTS.headline};
    font-size: 1.5em;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: .2em;
    background-color: ${COLORS.grubHubOrange};
    color: ${COLORS.white};
  }
`
