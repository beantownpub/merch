import React from "react"
import { StyledRefundContainer } from "./styles"

export const PrivacyPolicy = () => {
    return (
        <StyledRefundContainer aria-labelledby="Retrurn policy container">
            <article>
                <h1>Privacy Policy</h1>
                <p>
                Thanks for viewing the privacy notice of Beantown Pub. This Privacy Notice pertains to the personal information
                we collect about our customers on our website.
                </p>
                <h2>Information We Obtain</h2>
                <ul>
                <li>payment card or other financial account information;</li>
                <li>contact, billing, and shipping information (including name, e-mail address, postal address, and phone number);</li>
                </ul>
                <p>We only collect information when you complete a transaction for our online merchandise</p>
            </article>
        </StyledRefundContainer>
    )
}
