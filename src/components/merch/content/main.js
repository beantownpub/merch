import React from "react"
import { StyledRefundContainer } from "./styles"

export const OrderConfirmation = (props) => {
    return (
        <StyledContentContainer aria-labelledby="Order confirmation"  h1Color={props.h1Color}>
            <h1>Order Complete</h1>
            <p>Thank you for shopping with Beantown Pub!</p>
            <p>Your order confirmation has been emailed to</p>
            <p>{props.email}</p>
            <p><strong>Order ID:</strong></p>
            <p>{props.confirmationCode}</p>
        </StyledContentContainer>
    )
}

export const OrderFailed = (props) => {
    return (
        <StyledContentContainer aria-labelledby="Order failed" h1Color={props.h1Color}>
            <h1>Order Failed</h1>
            <p>We're sorry but there was an issue processing your payment</p>
            <p>You have not been charged</p>
            <p>Refresh page to try again or later or contact us at</p>
            <p>{props.email}</p>
        </StyledContentContainer>
    )
}

export const ShippingInfo = (props) => {
    return (
        <StyledContentContainer aria-labelledby="Shipping info" margin=".5rem auto" padding="1rem">
            <h2>Shipping Info</h2>
            <p>Currently we can only ship domestically in the U.S<br />
            All orders are standard shipping and cost {props.shippingPrice}</p>
        </StyledContentContainer>
    )
}

export const ReturnPolicy = () => {
    console.log(`Static PATH: ${process.env.STATIC_PATH}`)
    return (
        <div>
        <StyledRefundContainer aria-labelledby="Retrurn policy container">
            <article>
                <h1>Return &amp; Refund Policy</h1>
                <p>
                Thanks for shopping at beantownpub.com.
                If you are not entirely satisfied with your purchase, we're here to help.
                </p>
                <h2>Returns</h2>
                <p>
                You have 30 calendar days to return an item from the date you received it.
                To be eligible for a return, your item must be unused and in the same condition that you received it.
                Your item must be in the original packaging.
                Your item needs to have the receipt or proof of purchase.
                </p>
                <h2>Refunds</h2>
                <p>
                Once we receive your item, we will inspect it and notify you that we have received your returned
                item. We will immediately notify you on the status of your refund after inspecting the item.
                If your return is approved, we will initiate a refund to your credit card (or original method of payment).
                You will receive the credit within a certain amount of days, depending on your card issuer's policies.
                </p>
                <h2>Shipping</h2>
                <p>
                You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non­refundable.
                If you receive a refund, the cost of return shipping will be deducted from your refund.
                </p>
                <h2>Contact us</h2>
                <p>If you have any questions on how to return your item to us, <a href="/contact">contact us</a>.</p>
                <h2>Return Process</h2>
                <p>
                To return an item, please email us at beantownpubboston@gmail.com with your return request. Please include your order ID and reason for return.
                Once we've replied to your email and initiated the return place the item securely in its original packaging and mail your return
                to our <a href="/contact">mailing address</a></p>
            </article>
        </StyledRefundContainer>
        </div>
    )
}
