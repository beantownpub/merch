import styled from 'styled-components'
import { config } from '../../../../utils/main'

const COLORS = config.colors

export const StyledPaymentForm = styled.div`
    background-color: white;
    border: 2px solid ${COLORS.borderGray};
    border-radius: .25rem;
    box-shadow: ${props => props.boxShadow || `.25rem .25rem .75rem .5rem ${COLORS.boxShadowGray}`};
    display: flex;
    flex-flow: column wrap;
    margin: 2rem auto;
    padding: 1rem;
    position: relative;
`
