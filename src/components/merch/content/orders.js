import React from "react"
import { config } from "../../../utils/main"
import { StyledContentContainer } from "./styles.js"

const Container = (props) => {
  return (
    <StyledContentContainer
      aria-labelledby={props.label}
      h1Color={props.h1Color}
      margin={props.margin}
      padding={props.padding}>{props.children}</StyledContentContainer>
  )
}

export const OrderConfirmation = (props) => {
  return (
    <Container label="Order confirmation"  h1Color={props.h1Color}>
      <h1>Order Complete</h1>
      <p>Thank you for shopping with Beantown Pub!</p>
      <p>Your order confirmation has been emailed to</p>
      <p>{props.email}</p>
      <p><strong>Order ID:</strong></p>
      <p>{props.confirmationCode}</p>
      <p>Refresh page to start a new order</p>
      <p>If you have any questions or concerns please <a href="/contact">contact us</a></p>
    </Container>
  )
}

export const OrderFailed = (props) => {
  return (
    <Container aria-labelledby="Order failed" h1Color={props.h1Color}>
      <h1>Order Failed</h1>
      <p>We're sorry but there was an issue processing your payment</p>
      <p>You have not been charged</p>
      <p>Refresh page to try again later or contact us at</p>
      <p>{props.email}</p>
    </Container>
  )
}

export const ShippingInfo = (props) => {
  const shippingPrice = config.orders.shippingPrice
  return (
    <Container label="Shipping info" margin=".5rem auto" padding="1rem">
      <h2>Shipping Info</h2>
      <p>Currently we can only ship domestically in the U.S<br />
      All orders are standard shipping and cost {shippingPrice}</p>
    </Container>
  )
}
