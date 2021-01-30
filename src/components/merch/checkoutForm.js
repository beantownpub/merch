import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import MenuIcon, { getIcon } from '../Icon'
import { ViewButton } from './buttons'
import { StyledCheckoutForm } from './styles/formStyles'
// import SquarePayment from './square/Square'
import { SquareWidget } from './square/square'


const config = require('./merchConfig.json')
const apiUrl = process.env.MERCH_API_URL || config.apiUrl

const stateVerify = {
    required: 'Required',
    pattern: {
        value: /^[A-Za-z]{2}$/i,
        message: "invalid state"
    }
}

const emailVerify = {
    required: 'Required',
    pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "invalid email address"
    }
}

const zipVerify = {
    required: 'Required',
    pattern: {
        value: /^[0-9]{5}$/i,
        message: "invalid zip code"
    }
}

const required = {
    required: 'Required'
}

export const CheckoutForm = (props) => {
    const [checkout, setCheckout] = useState({
        showPayment: false,
        showShipping: false,
        sameShippingAndBilling: true,
        cartVaules: {}
    })
    const { handleSubmit, register, errors, reset } = useForm()

    const toggleShipping = event => {
        setCheckout({
            showShipping: event.target.checked
        })
    }

    const onSubmit = values => {
        values.cart = props.cart
        if (!checkout.showShipping) {
            setCheckout({
                showPayment: true,
                showShipping: false,
                cartVaules: values
            })
        } else {
            setCheckout({
                showPayment: true,
                showShipping: true,
                cartVaules: values
            })
        }
    }

    function hideSquare() {
        setCheckout({
            showPayment: false
        })
    }

    return (
        <div>
        <StyledCheckoutForm>
            <h2>
                <MenuIcon
                    style={{fontSize: '.75rem', margin: 'auto'}}
                    name={getIcon('faLock')}
                /> Secure Checkout
            </h2>
            <div className='billingAddress'>Billing Address</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name='firstName' placeholder='First Name' ref={register(required)} />
                <h3>{errors.firstName && errors.firstName.message}</h3>
                <input name='lastName' placeholder='Last Name' ref={register(required)} />
                <h3>{errors.lastName && errors.lastName.message}</h3>
                <input name='street' placeholder='Street' ref={register(required)} />
                <h3>{errors.street && errors.street.message}</h3>
                <input name='city' placeholder='City' ref={register(required)} />
                <h3>{errors.city && errors.city.message}</h3>

                <div className='stateZip'>
                    <label>State</label>
                    <input name='state' size='2' ref={register(stateVerify)} />
                    <h3>{errors.state && errors.state.message}</h3>
                    <label>Zip</label>
                    <input name='zipCode' size='5' ref={register(zipVerify)} />
                    <h3>{errors.zipCode && errors.zipCode.message}</h3>
                </div>

                <input name='email' placeholder='Email' ref={register(emailVerify)} />
                <h3>{errors.email && errors.email.message}</h3>

                <div className='billingAddress'>Shipping Address</div>
                <div className='sameAsBillingAddress'>
                    <label htmlFor="sameAsBillingAddress">Same As Billing</label>
                    <input
                        type="checkbox"
                        id="sameAsBillingAddress"
                        name="sameAsBillingAddress"
                        defaultChecked={false}
                        ref={register}
                        onClick={(value) => toggleShipping(value)}
                    />
                </div>
            {!checkout.showShipping &&
                <div className="shippingAddress">
                    <input name='shippingFirstName' placeholder='First Name' ref={register(required)} />
                    <h3>{errors.shippingFirstName && errors.shippingFirstName.message}</h3>
                    <input name='shippingLastName' placeholder='Last Name' ref={register(required)} />
                    <h3>{errors.shippingLastName && errors.shippingLastName.message}</h3>
                    <input name='shippingStreet' placeholder='Street' ref={register(required)}/>
                    <h3>{errors.street && errors.street.message}</h3>
                    <input name='shippingCity' placeholder='City' ref={register(required)} />
                    <h3>{errors.city && errors.city.message}</h3>

                    <div className='stateZip'>
                        <label>State</label>
                        <input name='shippingState' size='2' ref={register(stateVerify)} />
                        <h3>{errors.shippingState && errors.shippingState.message}</h3>
                        <label>Zip</label>
                        <input name='shippingZip' size='5' ref={register(zipVerify)} />
                        <h3>{errors.shippingZip && errors.shippingZip.message}</h3>
                    </div>
                </div>
            }
            {!checkout.showPayment &&
                <ViewButton borderColor='#e2e2e2' text='Proceed to Payment' />
            }
            </form>
        </StyledCheckoutForm>
        {checkout.showPayment &&
            <SquareWidget
                formReset={reset}
                hideCheckout={props.hideCheckout}
                resetCart={props.resetCart}
                cartUpdate={props.cartUpdate}
                unloadSquare={props.unloadSquare}
                hideSquare={hideSquare}
                cartValues={checkout.cartVaules}>{props.cartTotal}</SquareWidget>
        }
        </div>
    )
}