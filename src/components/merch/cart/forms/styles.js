import styled from 'styled-components'
import { config } from '../../../../utils/main.js'
const COLORS = config.colors
const FONTS = config.fonts

export const StyledCheckoutContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
`

export const StyledCheckoutForm = styled.div`
  display: flex;
  flex-flow: column wrap;
  max-width: 99vw;
  margin: auto;
  overflow: scroll;
  width: 100%;
  form {
    margin: 1rem auto;
    max-width: 85vw;
    overflow: scroll;
    width: 100%;
    input {
      margin: .5rem 0;
      padding: 1rem;
      border: .05rem solid ${COLORS.borderGray};
      border-radius: 6px;
      width: 100%;
    }
    label {
      margin: auto .25rem;
      font-family: ${FONTS.headline};
      letter-spacing: .25rem;
      text-transform: uppercase;
    }
  }
  h3 {
    padding: .25rem;
    font-size: .75rem;
    color: red;
    font-family: ${FONTS.content};
    font-weight: 900;
    text-transform: uppercase;
  }
  .stateZip {
    width: 350px;
    display: flex;
    flex-flow: row nowrap;
    input:first-of-type {
      width: 50px;
    }
    input:nth-of-type(2) {
      width: 100px;
    }
  }
  .billingAddress {
    margin: auto;
    font-family: ${FONTS.headline};
    font-size: 1em;
    font-style: italic;
  }
  .sameAsBillingAddress {
    display: flex;
    flex-flow: row no wrap;
    input:first-of-type {
      width: 15px;
      height: 15px;
    }
  }
  .shippingAddress {
    margin: auto;
    width: 100%;
  }
`
