import React, { useState } from 'react'
import { ViewButton } from '../buttons'
import { StyledSquareForm } from '../styles/squareStyles'

const slide = require('../../../utils/menuSlide')
const appId = 'sandbox-sq0idb-joMinPnPEfYAgQPEfc13Cw'
const formStyles = [{
    fontSize: '16px',
    lineHeight: '24px',
    padding: '16px',
    placeholderColor: '#a0a0a0',
    backgroundColor: 'transparent',
}]
const reqHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}
var idempotency_key = uuidv4()

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
    })
}

export const SquareForm = (props) => {
    const [state, setState] = useState({
        paymentComplete: false,
        paymentAmount: Math.ceil(props.cartTotal * 100),
        showSquareForm: true,
        paymentInfo: {}
    })

    const setInfo = (info) => {
        setState({
            paymentInfo: info
        })
    }

    const paymentForm = new props.paymentForm({
        applicationId: appId,
        autoBuild: false,
        inputStyles: formStyles,
        card: {
            elementId: 'sq-card',
        },
        callbacks: {
            cardNonceResponseReceived: function (errors, nonce, cardData) {
                if (errors) {
                    console.error('Encountered errors:')
                    errors.forEach(function (error) {
                        console.error('  ' + error.message)
                    })
                    console.log('Error fetching NONCE')
                    setPayButtonDisableState(false)
                    return
                }
                console.log(`CARD DATA: ${Object.keys(cardData)}`)
                setPayButtonDisableState(false)
                fetch('process-payment', {
                    method: 'POST',
                    headers: reqHeaders,
                    body: JSON.stringify({
                        nonce: nonce,
                        idempotency_key: idempotency_key,
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
                    setInfo(data)
                    console.log('STATE PAY')
                    console.log(state.paymentInfo) //UPDATE HERE
                    data.order = props.cartValues
                    console.log('Payment complete successfully!')
                    setPayButtonDisableState(false)
                    completePayment(data)
                })
                .catch(err => {
                    console.error(err)
                    //Generate a new idempotency key for next payment attempt
                    idempotency_key = uuidv4()
                    setPayButtonDisableState(false)
                    alert('Payment failed to complete!')
                })
            }
        }
    })
    paymentForm.build()

    const completePayment = (data) => {
        console.log(data)
        console.log(Object.keys(data))
        setState({
            paymentComplete: true,
            paymentInfo: data.result.payment
        })
        fetch('process-order', {
            method: 'POST',
            headers: reqHeaders,
            body: JSON.stringify(data)
        })
        .catch(err => {
            console.log('Order error: ' + err)
        })
        .then(response => {
            if (response.status != 200) {
                return response.json().then(
                errorInfo => Promise.reject(errorInfo)) //UPDATE HERE
            }
            props.formReset()
            props.resetCart()
        })
    }

    const setPayButtonDisableState = newState => {
        var payButton = document.getElementById("sq-creditcard")
        payButton.disabled = newState
        var buttonContent = payButton.innerHTML
        payButton.innerHTML = buttonContent
    }

    const onSubmit = event => {
        console.log('EVENT: ' + event)
        setPayButtonDisableState(true)
        event.preventDefault()
        paymentForm.requestCardNonce()
    }

    return (
        <StyledSquareForm>
            <div id="form-container">
                <div id="sq-card"></div>
                <div className="third" id="sq-expiration-date"></div>
                <div className="third" id="sq-cvv"></div>
                <div className="third" id="sq-postal-code"></div>
                {state.paymentComplete &&
                    <button id="sq-creditcard" className="button-credit-card" onClick={onSubmit}>Payment Complete</button>
                }
                {!state.paymentComplete &&
                    <button id="sq-creditcard" className="button-credit-card" onClick={onSubmit}>Pay {props.cartTotal}</button>
                }
            </div>
            {state.paymentComplete &&
                <div className="orderComplete">
                <h3>Order Complete</h3>
                <p>Order ID: {state.paymentInfo.order_id.slice(0,7)}</p>
                <p>Confirmation email sent to {props.cartValues.email}</p>
                <ViewButton
                    borderColor='#e2e2e2'
                    clicker={slide.cartClose}
                    text='close'
                    icon='faShoppingCart'
                    borderColor='#e2e2e2'
                />
                </div>
            }
        </StyledSquareForm>
    )
}
