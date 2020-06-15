import styled from 'styled-components'

export const iconStyle = {
    margin: 'auto .5rem',
    color: '#e6cb00',
    fontSize: '1rem'
}

export const StyledButton = styled.div`
    button {
        margin: .25rem auto;
        padding: 1rem;
        width: ${props => props.width || "12rem"};
        font-family: gotham-narrow-ultra;
        background-color: ${props => props.bgColor || "white"};
        border: 1px solid ${props => props.borderColor || "white"};
        border-radius: .5rem;
        text-decoration: none;
        font-size: 1rem;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: .2rem;
        color: black;
    }
`
