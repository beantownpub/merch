import React from 'react'
import { useForm } from 'react-hook-form'
import { ViewButton } from './buttons'
import { StyledCheckoutForm } from './styles/formStyles'

const config = require('./merchConfig.json')

export const CheckoutForm = (props) => {
    const { handleSubmit, register, errors } = useForm()
    const onSubmit = values => {
        values.cart = props.cart
        const url = config.urls.cart
        fetch(url, {method: 'POST', credentials: 'include', body: JSON.stringify(values), headers: {'Content-Type': 'application/json'}})
            .then(response => response.json())
            .then(data => this.setState({ cartItems: data, numItemsInCart: data.cart_items.length, cartTotal: data.total }))
            .catch(error => console.log(error))
    }

    return (
        <StyledCheckoutForm>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input
                name='productName'
                placeholder='Product Name'
                ref={register({ required: 'Required'})}
            />
            <h3>{errors.productName && errors.productName.message}</h3>
            <textfield
                name='description'
                ref={register({ required: 'Required'})}
            />
            <h3>{errors.description && errors.description.message}</h3>
            <div className='stateZip'>
                <input
                    name='sku'
                    placeholder='SKU'
                    sixe='3'
                    ref={register({ required: 'Required'})}
                />
                <h3>{errors.sku && errors.sku.message}</h3>
                <label>Price</label>
                <input
                    name='price'
                    size='5'
                    ref={register({
                        required: 'Required',
                        pattern: {
                            value: /^[0-9]{2}\.[0-9]{2}$/i,
                            message: "invalid price"
                        }
                        })}
                />
                <h3>{errors.price && errors.price.message}</h3>
            </div>
            <ViewButton borderColor='#e2e2e2' text='Add Product' />
            </form>
        </StyledCheckoutForm>
    )
}