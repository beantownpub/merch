import React from "react"
import { StyledContentContainer } from "./styles"

export const OrderConfirmation = (props) => {
    return (
        <StyledContentContainer>
            <h1>Order Complete</h1>
            <h2>Confirmation code: {props.confirmationCode}</h2>
            <p>Order confirmation has been sent to {props.email}</p>
        </StyledContentContainer>
    )
}

export const ShippingInfo = (props) => {
    return (
        <StyledContentContainer>
            <p>Currently we can only ship domestically</p>
            <p>All orders are standard shipping and cost {props.shippingPrice}</p>
        </StyledContentContainer>
    )
}
