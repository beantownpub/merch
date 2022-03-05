import React, { useState } from 'react'
import { ApplePay, GooglePay, SquarePaymentsForm, CreditCardInput } from "react-square-web-payments-sdk"
import { StyledPaymentContainer, StyledPaymentForm } from "./styles"
import { config, reqHeaders, uuidv4 } from "../../../../utils/main"
import { cartClose } from "../../../../utils/menuSlide"
import { ToggleButton } from "../../../elements/buttons/main"
import { TailSpin } from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const COLORS = config.colors

export const PaymentForm = (props) => {
  const [state, setState] = useState({
    paymentComplete: false,
    paymentFailed: false,
    paymentAmount: Math.ceil(0 * 100),
    showSquareForm: true,
    paymentInfo: {}
  })

  const [spinner, setSpinner] = useState({ showSpinner: false })
  // const [buttonClick, setPointerEvents] = useState({ pointerEvents: "all" })
  const [orderComplete, setOrderComplete] = useState({ orderId: "" })

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
      alert('Error completing order! ' + err)
    })
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
        amount_money: {
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
    <StyledPaymentContainer aria-labelledby="Payment container">
      {spinner.showSpinner &&
        <div className="paymentProcessing">
          <p>Processing Order please standbye</p>
          <TailSpin color={COLORS.dodgerBlue} height={60} width={60} />
        </div>
      }
      {state.showSquareForm &&
        <StyledPaymentForm aria-labelledby="Payment form">
          <SquarePaymentsForm
            applicationId={process.env.SQUARE_APP_ID}
            locationId={process.env.SQUARE_LOCATION_ID}
            cardTokenizeResponseReceived={(token, buyer) => {
                makePayment(token["token"])
            }}
            createVerificationDetails={() => ({
                amount: `${props.cartTotal}`,
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
              })
            }
            createPaymentRequest={() => ({
              countryCode: 'US',
              currencyCode: 'USD',
              total: { amount: `${props.cartTotal}`, label: 'Total' },
              })
            }
          >
            {process.env.ENV === "production" &&
              <div className="digitalWallet"><ApplePay /></div>
            }
            <div className="digitalWallet"><GooglePay /></div>
            <h2>Buy with card</h2>
            <CreditCardInput text={`Pay ${props.cartTotal}`} submitButtonId="squareButton"/>
          </SquarePaymentsForm>
        </StyledPaymentForm>
      }
      {state.paymentComplete &&
        <div className="orderComplete">
          <ToggleButton bgColor={COLORS.dodgerBlue} icon='faShoppingCart' runFunction={cartClose} buttonText="Close"/>
        </div>
      }
    </StyledPaymentContainer>
  )
}
