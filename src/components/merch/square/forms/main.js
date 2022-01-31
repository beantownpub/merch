import React, { useState, useEffect } from 'react'
import { SquarePaymentsForm, CreditCardInput } from "react-square-web-payments-sdk"
import { StyledPaymentForm } from "./styles"
import { config, reqHeaders, uuidv4 } from "../../../../utils/main"
import { OrderConfirmation } from "../../cart/content"
import { cartClose } from "../../../../utils/menuSlide"
import { ToggleButton } from "../../../elements/buttons/main"

const COLORS = config.colors

export const PaymentForm = (props) => {
    const [state, setState] = useState({
        paymentComplete: false,
        paymentFailed: false,
        paymentAmount: Math.ceil(0 * 100),
        showSquareForm: false,
        paymentInfo: {}
    })

    useEffect(() => {
        if (props.cartValues) {
            console.log(`Total: ${props.cartValues.cart.total}`)
            setState({
                paymentAmount: Math.ceil(props.cartValues.cart.total * 100),
                showSquareForm: true
            })
        }
    }, [])

    const completePayment = (data) => {
        console.log(`Completeing payment ${Object.keys(data)}`)
        const order = {
            order: data.order,
            payment: data.result.payment
        }
        setState({
            paymentComplete: true,
            paymentInfo: data.result.payment,
            showSquareForm: false
        })
        console.log(`Payment Info: ${state.paymentInfo}`)
        fetch('process-order', {
            method: 'POST',
            headers: reqHeaders,
            body: JSON.stringify(order)
        })
        .catch(err => {
            console.log('Order error: ' + err)
        })
        .then(response => {
            if (response.status != 200) {
                return response.json().then(
                errorInfo => Promise.reject(errorInfo)) //UPDATE HERE
            }
            console.log(`Complete payment response: ${response.status}`)
            props.formReset()
            props.resetCart()
        })
        .catch(err => {
            console.error(err)
            setState({ paymentFailed: true })
            alert('Error sending order notification! ' + err)
        })
    }

    function makePayment(nonce) {
        fetch('process-payment', {
            method: 'POST',
            headers: reqHeaders,
            body: JSON.stringify({
                nonce: nonce,
                idempotency_key: uuidv4(),
                total: state.paymentAmount,
                amount_money: {
                    amount: state.paymentAmount,
                    currency: "USD"
                },
                buyer_email_address: props.cartValues.email
            })
        })
        .catch(err => {
            alert('Network error: ' + err)
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(
                errorInfo => Promise.reject(errorInfo)) //UPDATE HERE
            }
            return response.json() //UPDATE HERE
        })
        .then(data => {
            console.log(`DATA: ${Object.keys(data.result.payment)}`)
            setState({ paymentInfo: data.result.payment })
            console.log(`Success! Payment Info: ${state.paymentInfo}`) //UPDATE HERE
            data.order = props.cartValues
            completePayment(data)
        })
        .catch(err => {
            console.error(err)
            setState({ paymentFailed: true })
            alert('Payment failed to complete!')
        })
    }

    return (
        <div>
        {state.showSquareForm &&
            <StyledPaymentForm aria-labelledby="Payment form">
                <SquarePaymentsForm
                    applicationId={process.env.SQUARE_APP_ID}
                    locationId={process.env.SQUARE_LOCATION_ID}
                    cardTokenizeResponseReceived={(token, buyer) => {
                        console.info("TOKEN: " + token["token"])
                        makePayment(token["token"])
                    }}
                >
                    <CreditCardInput text={`Pay ${props.cartValues.cart.total}`} />
                </SquarePaymentsForm>
            </StyledPaymentForm>
        }
        {state.paymentComplete &&
            <div className="orderComplete">
                <OrderConfirmation
                    confirmationCode={state.paymentInfo.order_id.slice(0,7)}
                    email={props.cartValues.email}
                />
                <ToggleButton bgColor={COLORS.dodgerBlue} icon='faShoppingCart' runFunction={cartClose} buttonText="Close"/>
            </div>
        }
        </div>
    )
}
