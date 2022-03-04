import React, { useState, useEffect, useRef } from 'react'
import { SquarePaymentsForm, CreditCardInput } from "react-square-web-payments-sdk"
import { StyledPaymentForm } from "./styles"
import { config, reqHeaders, uuidv4 } from "../../../../utils/main"
// import { OrderConfirmation } from "../../cart/content"
import { cartClose } from "../../../../utils/menuSlide"
import { ToggleButton } from "../../../elements/buttons/main"
import { Spinner } from "../spinner"

const COLORS = config.colors

export const PaymentForm = (props) => {
    // document.addEventListener("click", disableButton)
    const [state, setState] = useState({
        paymentComplete: false,
        paymentFailed: false,
        paymentAmount: Math.ceil(0 * 100),
        showSquareForm: true,
        paymentInfo: {}
    })

    const [spinner, setSpinner] = useState({ showSpinner: false })
    const [buttonClick, setPointerEvents] = useState({ pointerEvents: "all" })
    const [orderComplete, setOrderComplete] = useState({ orderId: "" })
    // const mountedRef = useRef(true)

    // useEffect(() => {
    //     setState({ showSquareForm: props.showSquare })
    //     let button = document.getElementById("squareButton")
    //     if (button) {
    //         console.log('Button Found')
    //         // button.addEventListener("click", disableButton)
    //     }
    //     return () => {
    //         mountedRef.current = false
    //     }
    // }, [])

    const completePayment = (data) => {
        // console.log(`Completeing payment ${Object.keys(data)}`)
        // console.log(`Order keys ${Object.keys(data.order)}`)
        // console.log(`Result keys ${Object.keys(data.result.payment)}`)
        // console.log(`Result values ${Object.values(data.result.payment)}`)
        // console.log(`Order ID: ${data.result.payment.order_id}`)
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
        // console.log(`Payment Info: ${state.paymentInfo}`)
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
    function disableButton(event) {
        // console.log(event)
        // setPointerEvents({ pointerEvents: "none" })
        const button = event.target
        if (button.id === "squareButton") {
          setState({ showSpinner: true })
          button.disabled = true
          document.getElementById("checkoutForm").disabled = true
        } else {
          console.log(`Element ID: ${button.id}`)
        }
    }

    function makePayment(nonce) {
        setState({ showSquareForm: false })
        setSpinner({ showSpinner: true })
        fetch('process-payment', {
            method: 'POST',
            headers: reqHeaders,
            body: JSON.stringify({
                source_id: nonce,
                idempotency_key: uuidv4(),
                // total: state.paymentAmount,
                amount_money: {
                    // amount: state.paymentAmount,
                    amount: Math.ceil(props.cartTotal * 100),
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
            setState({ paymentInfo: data.result.payment })
            data.order = props.cartValues
            completePayment(data)
        })
        .catch(err => {
          setState({ paymentFailed: true })
          props.hideForm()
          props.paymentFailed()
        })
    }

    return (
        <div>
        {state.showSquareForm &&
            <StyledPaymentForm aria-labelledby="Payment form" pointerEvents={buttonClick.pointerEvents}>
                <Spinner />
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
                    <CreditCardInput text={`Pay ${props.cartTotal}`} submitButtonId="squareButton"/>
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
