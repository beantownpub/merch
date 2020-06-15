import React from 'react'
import { useForm } from 'react-hook-form'
import MenuIcon, { getIcon } from '../Icon'
import { ViewButton } from './buttons'
import { StyledCheckoutForm } from './styles/formStyles'

const config = require('./merchConfig.json')
const apiUrl = process.env.MERCH_API_URL || config.apiUrl

export const CheckoutForm = (props) => {
    const { handleSubmit, register, errors } = useForm()
    const onSubmit = values => {
        values.cart = props.cart
        const url = `${apiUrl}${config.uris.cart}`
        fetch(url, {method: 'POST', credentials: 'include', body: JSON.stringify(values), headers: {'Content-Type': 'application/json'}})
            .then(response => response.json())
            .then(data => this.setState({ cartItems: data, numItemsInCart: data.cart_items.length, cartTotal: data.total }))
            .catch(error => console.log(error))
    }

    return (
        <StyledCheckoutForm>
            <h2>
                <MenuIcon
                    style={{fontSize: '.75rem', margin: 'auto'}}
                    name={getIcon('faLock')}
                /> Secure Checkout
            </h2>
            <div className='billingAddress'>Billing Address</div>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input
                name='firstName'
                placeholder='First Name'
                ref={register({ required: 'Required'})}
            />
            <h3>{errors.firstName && errors.firstName.message}</h3>
            <input
                name='lastName'
                placeholder='Last Name'
                ref={register({ required: 'Required'})}
            />
            <h3>{errors.lastName && errors.lastName.message}</h3>
            <input
                name='street'
                placeholder='Street'
                ref={register({ required: 'Required'})}
            />
            <h3>{errors.street && errors.street.message}</h3>
            <input
                name='city'
                placeholder='City'
                ref={register({ required: 'Required'})}
            />
            <h3>{errors.city && errors.city.message}</h3>
            <div className='stateZip'>
                <label>State</label>
                <input
                    name='state'
                    size='2'
                    ref={register({
                        required: 'Required',
                        pattern: {
                            value: /^[A-Za-z]{2}$/i,
                            message: "invalid state"
                        }
                        })}
                />
                <h3>{errors.state && errors.state.message}</h3>
                <label>Zip</label>
                <input
                    name='zipCode'
                    size='5'
                    ref={register({
                        required: 'Required',
                        pattern: {
                            value: /^[0-9]{5}$/i,
                            message: "invalid zip code"
                        }
                        })}
                />
                <h3>{errors.zipCode && errors.zipCode.message}</h3>
            </div>

            <input
                name='email'
                placeholder='Email'
                ref={register({
                    required: 'Required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "invalid email address"
                    }
                })}
            />
            <h3>{errors.email && errors.email.message}</h3>

            <input
                name="username"
                ref={register({
                validate: value => value !== "admin" || "Nice try!"
                })}
            />
            <h3>{errors.username && errors.username.message}</h3>
            <div className='billingAddress'>Shipping Address</div>
            <input
                name='shippingStreet'
                placeholder='Street'
                ref={register({ required: 'Required'})}
            />
            <h3>{errors.street && errors.street.message}</h3>
            <input
                name='shippingCity'
                placeholder='City'
                ref={register({ required: 'Required'})}
            />
            <h3>{errors.city && errors.city.message}</h3>
            <div className='stateZip'>
                <label>State</label>
                <input
                    name='shippingState'
                    size='2'
                    ref={register({
                        required: 'Required',
                        pattern: {
                            value: /^[A-Za-z]{2}$/i,
                            message: "invalid state"
                        }
                        })}
                />
                <h3>{errors.shippingState && errors.shippingState.message}</h3>
                <label>Zip</label>
                <input
                    name='shippingZip'
                    size='5'
                    ref={register({
                        required: 'Required',
                        pattern: {
                            value: /^[0-9]{5}$/i,
                            message: "invalid zip code"
                        }
                        })}
                />
                <h3>{errors.shippingZip && errors.shippingZip.message}</h3>
            </div>
            <div className='billingAddress'>Payment</div>
            <input
                name='cardNumber'
                placeholder='Card Number'
                ref={register({ required: 'Required'})}
            />
            <h3>{errors.cardNumber && errors.cardNumber.message}</h3>
            <div className='stateZip'>
                <label>exp</label>
                <input
                    name='cardExp'
                    size='7'
                    placeholder='MM/YYYY'
                    ref={register({
                        required: 'Required',
                        pattern: {
                            value: /^[0-9]{2}\/[0-9]{4}$/i,
                            message: "invalid expiration"
                        }
                        })}
                />
                <h3>{errors.cardExp && errors.cardExp.message}</h3>
                <label>ccv</label>
                <input
                    name='cardCCV'
                    size='3'
                    ref={register({
                        required: 'Required',
                        pattern: {
                            value: /^[0-9]{3}$/i,
                            message: "invalid code"
                        }
                        })}
                />
                <h3>{errors.cardCCV && errors.cardCCV.message}</h3>
            </div>

            <ViewButton borderColor='#e2e2e2' text='Submit' />
            </form>
        </StyledCheckoutForm>
    )
}