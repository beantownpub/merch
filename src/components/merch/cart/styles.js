import styled from 'styled-components'
import { config } from '../../../utils/main.js'
const COLORS = config.colors
const FONTS = config.fonts

export const StyledNumCartItems = styled.div`
  color: ${COLORS.black};
  display: flex;
  flex-flow: row nowrap;
  font-family: ${FONTS.headline};
  font-size: 1em;
  letter-spacing: .09em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  .numCartItemsButton {
    margin: auto;
  }
  .merchNav {
    background-color: ${COLORS.black};
    border-radius: 4px;
    color: ${COLORS.yellow};
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    margin: .5rem;
    padding: .75rem;
    width: min-content;
    h3 {
      font-weight: 900;
      text-align: center;
      width: 100%;
    }
  }
`
export const StyledCartContainer = styled.div`
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.borderGray};
  border-radius: 4px;
  display: flex;
  flex-flow: column nowrap;
  font-family: ${FONTS.headline};
  height: -webkit-fill-available;
  height: 100vh;
  left: -35em;
  margin: auto;
  max-width: 99vw;
  min-width: 300px;
  overflow: scroll;
  padding: 1.5em;
  position: fixed;
  top: 0;
  z-index: 1002;
  a {
  color: ${COLORS.dodgerBlue};
  font-family: ${FONTS.content};
  font-size: 125%;
  font-weight: 600;
  margin: auto;
  text-decoration: none;
  }
  a:hover { color: ${COLORS.red}; }
  .cartTotal {
  font-family: ${FONTS.content};
  font-size: 1.25em;
  font-weight: 900;
  padding: .5rem;
  }
  .cartList {
  display: flex;
  h2 {
    border-bottom: 2px solid ${COLORS.dodgerBlue};
    margin: auto;
    padding: .5rem;
  }
  }
  .checkoutForm {
  display: flex;
  flex-flow: column nowrap;
  img {
    margin: 2rem auto;
    max-width: 5rem;
  }
  }
  @media screen and (-webkit-min-device-pixel-ratio:0) {
  select,
  textarea,
  input {
    font-size: 16px;
  }
  }
  @media (min-width:768px) {
  min-width: 411px;
  left: -39em;
  }
`


export const StyledItemsTable = styled.div`
  margin: 1rem auto;
  display: flex;
  flex-flow: column wrap;
  h2 {
  border-bottom: 1.5px solid ${COLORS.dodgerBlue};
  margin: .5rem auto;
  padding: .5rem;
  }
  table {
  border: 1px solid ${COLORS.shadowGray};
  border-radius: .5rem;
  box-shadow: ${props => props.boxShadow || `.25rem .25rem 1rem .5rem ${COLORS.boxShadowGray}`};
  font-family: ${FONTS.content};
  font-weight: 900;
  margin: auto;
  padding: .25rem;
  width: 100%;
  th {
    background: ${COLORS.yellow};
    border: 1px solid ${COLORS.black};
    font-weight: 900;
    padding: .25rem;
  }
  td {
    border: 1px solid ${COLORS.black};
    padding: .25rem;
    text-align: center;
  }
  }
`

export const StyledContentContainer = styled.div`
  border: ${props => props.border || ".75px solid black" };
  border-radius: ${props => props.borderRadius || "4px"};
  box-shadow: ${props => props.boxShadow || `.25rem .25rem 1rem .5rem ${COLORS.boxShadowGray}`};
  display: flex;
  flex-flow: column wrap;
  margin: ${props => props.margin || "1rem auto"};
  padding: ${props => props.padding || "2rem"};
  width: ${props => props.width || "100%" };
  h1 {
  color: ${props => props.h1Color || COLORS.orderCompleteGreen};
  font-family: ${FONTS.headline};
  letter-spacing: .25rem;
  margin: auto;
  padding: 1rem;
  }
  h2 {
  border-bottom: 1.5px solid ${COLORS.red};
  margin: auto;
  padding: .5rem;
  }
  p {
  font-family: ${FONTS.content};
  font-size: 125%;
  margin: auto;
  padding: .5rem;
  max-width: 300px;
  }
`
