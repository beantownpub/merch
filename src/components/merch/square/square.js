import React, { useState, useEffect } from 'react'
import { SquareForm } from './form'

// prodScript = "https://js.squareup.com/v2/paymentform"
const sandboxScript = "https://js.squareupsandbox.com/v2/paymentform"
const squareScript = process.env.SQUARE_SCRIPT || sandboxScript

export const SquareWidget = (props) => {
    const [state, setState] = useState({
        loaded: false
    })

    useEffect(() => {
        let sqPaymentScript = document.createElement('script')
        sqPaymentScript.src = squareScript
        sqPaymentScript.type = "text/javascript"
        sqPaymentScript.async = false
        sqPaymentScript.onload = ()=>{setState({
            loaded: true
        })}
        document.getElementsByTagName("head")[0].appendChild(sqPaymentScript)
    },[])

    const unloadSquare = () => {
        setState({
            loaded: false
        })
    }

    return (
        state.loaded &&
            <SquareForm
                paymentForm={window.SqPaymentForm}
                cartValues= {props.cartValues}
                cartTotal={props.children}
                formReset={props.formReset}
                hideCheckout={props.hideCheckout}
                hideSquare={props.hideSquare}
                resetCart={props.resetCart}
                unloadSquare={unloadSquare}
            />
    )
}
