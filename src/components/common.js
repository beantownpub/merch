import React from 'react'
import { StyledInfo, StyledLinkButton } from './Styles'


export const InfoSection = (props) => {
    return ( 
        <StyledInfo color={props.bgColor} fontColor={props.fontColor}>{props.children}</StyledInfo>
    )
}

export const Title = (props) => {
    return (
        <h1>{props.children}</h1>
    )
}

export const LinkButton = (props) => {
    return (
        <StyledLinkButton buttonColor={props.color} fontColor={props.fontColor}>
            <button>{props.children}</button>
        </StyledLinkButton>
    )
}
