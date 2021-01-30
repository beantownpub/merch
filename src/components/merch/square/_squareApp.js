import { env } from 'process'
import React, { Component } from 'react'
import { SquareForm } from './squarePayments'

// prodScript = "https://js.squareup.com/v2/paymentform"
const sandboxScript = "https://js.squareupsandbox.com/v2/paymentform"
const squareScript = process.env.SQUARE_SCRIPT || sandboxScript
var version = env.JAL_VERSION || "nothing doing"

class SquarePayment extends Component {
    constructor(props){
        super(props)
        this.state = {
            loaded: false
        }
    }

    UNSAFE_componentWillMount(){
        console.log(`Version: ${version}`)
        const that = this
        let sqPaymentScript = document.createElement('script')
        sqPaymentScript.src = squareScript
        sqPaymentScript.type = "text/javascript"
        sqPaymentScript.async = false
        sqPaymentScript.onload = ()=>{that.setState({
            loaded: true
        })}
        document.getElementsByTagName("head")[0].appendChild(sqPaymentScript)
    }

    render() {
        return (
            this.state.loaded &&
                <SquareForm
                    paymentForm={window.SqPaymentForm}
                    cartValues= {this.props.cartValues}
                    cartTotal={this.props.children}
                />
        )
    }
}

export default SquarePayment
