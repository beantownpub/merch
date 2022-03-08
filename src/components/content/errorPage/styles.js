import styled from 'styled-components'
import { config } from '../../../utils/main'
const COLORS = config.colors
const FONTS = config.fonts

export const StyledContentContainer = styled.div`
  background-color: ${COLORS.yellow};
  display: flex;
  flex-flow: column wrap;
  margin: 5rem auto auto auto;
  padding: 12rem 2rem;
  width: 100%;
  h1 {
    margin: auto;
    padding: 2rem;
    font-family: ${FONTS.button};
    font-size: 250%;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: .2em;
    color: ${COLORS.black};
    line-height: 150%;
    text-align: center;
  }
  h2 {
    font-family: ${FONTS.content};
    font-size: 150%;
    line-height: 150%;
    margin: auto;
    text-align: center;
  }
  @media (min-width: 400px) {
    padding: 20rem 2rem;
}
  @media (min-width: 768px)
    and (-webkit-min-device-pixel-ratio: 2) {
      padding: 25rem 2rem;
  }
  @media (min-width: 768px) {
      padding: 25rem 2rem;
  }
`
