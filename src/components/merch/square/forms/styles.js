import styled from 'styled-components'
import { config } from '../../../../utils/main'

const COLORS = config.colors

export const StyledPaymentContainer = styled.div`
  .paymentProcessing {
    background-color: ${COLORS.orderCompleteGreen};
    border: 1px solid ${COLORS.boxShadowGray};
    border-radius: .25rem;
    box-shadow: ${props => props.boxShadow || `.25rem .25rem .75rem .5rem ${COLORS.boxShadowGray}`};
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    margin: auto;
    padding: 1rem;
    p {
      font-size: 150%;
      padding: 5rem 2rem;
      text-align: center
    }
  }
  .paymentProcessing * {
    margin: auto;
  }
`

export const StyledPaymentForm = styled.div`
    background-color: white;
    border: 2px solid ${COLORS.white};
    border-radius: 1rem;
    box-shadow: ${props => props.boxShadow || `.25rem .25rem .75rem .5rem ${COLORS.boxShadowGray}`};
    display: flex;
    flex-flow: column wrap;
    margin: 2rem auto;
    padding: 1rem;
    pointer-events: ${props => props.pointerEvents || "all" };
    position: relative;
    h2 {
      padding: 1rem 0;
      text-align: center;
    }
    .digitalWallet {
      padding: .5rem;
    }
`
