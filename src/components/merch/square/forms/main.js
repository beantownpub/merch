import React, { useState, useEffect } from 'react'
import { SquarePaymentsForm, CreditCardInput } from "react-square-web-payments-sdk"
import { StyledPaymentForm } from "./styles"
import { config, reqHeaders, uuidv4 } from "../../../../utils/main"
// import { OrderConfirmation } from "../../cart/content"
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

    const [orderComplete, setOrderComplete] = useState({ orderId: "" })

    useEffect(() => {
        if (props.cartValues) {
            console.log(`Total: ${props.cartValues.cart.total}`)
            setState({
                paymentAmount: Math.ceil(props.cartTotal * 100),
                showSquareForm: true
            })
        }
    }, [])

    const completePayment = (data) => {
        console.log(`Completeing payment ${Object.keys(data)}`)
        console.log(`Order keys ${Object.keys(data.order)}`)
        console.log(`Result keys ${Object.keys(data.result.payment)}`)
        console.log(`Result values ${Object.values(data.result.payment)}`)
        console.log(`Order ID: ${data.result.payment.order_id}`)
        const order = {
            order: data.order,
            payment: data.result.payment
        }
        setState({
            paymentComplete: true,
            paymentInfo: data.result.payment,
            showSquareForm: false
        })
        setOrderComplete({ orderId: data.result.payment.order_id})
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
            } else {
                props.formReset()
                props.resetCart()
                props.hideForm()
                if (orderComplete.orderId) {
                    console.log(`Order ID updated ${orderComplete.orderId}`)
                }
                props.paymentComplete(props.cartValues.email, data.result.payment.order_id)
            }
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
                source_id: nonce,
                idempotency_key: uuidv4(),
                // total: state.paymentAmount,
                amount_money: {
                    amount: state.paymentAmount,
                    currency: "USD"
                }
                // buyer_email_address: props.cartValues.email
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
            console.log('Payment Error:')
            console.error(JSON.parse(err.result))
            setState({ paymentFailed: true })
            props.hideForm()
            props.paymentFailed()
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
                        makePayment(token["token"])
                    }}
                    createVerificationDetails={() => ({
                        amount: '1.00',
                        /* collected from the buyer */
                        billingContact: {
                            addressLines: [props.cartValues.street, props.cartValues.unit],
                            familyName: props.cartValues.firstName,
                            givenName: props.cartValues.lastName,
                            countryCode: 'USA',
                            city: props.cartValues.city,
                        },
                        currencyCode: 'USD',
                        intent: 'CHARGE',
                    })}
                >
                    <CreditCardInput text={`Pay ${props.cartTotal}`} />
                </SquarePaymentsForm>
            </StyledPaymentForm>
        }
        {state.paymentComplete &&
            <div className="orderComplete">
                <ToggleButton bgColor={COLORS.dodgerBlue} icon='faShoppingCart' runFunction={cartClose} buttonText="Close"/>
            </div>
        }
        </div>
    )
}
