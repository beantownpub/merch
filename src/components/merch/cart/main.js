import React, { useState } from 'react'
import { ToggleButton } from '../../elements/buttons/main'
import { StyledCartContainer } from './styles'
import { CheckoutForm } from './forms/main'
import { CartItem, ItemsContainer } from './items'
import { ShippingInfo, OrderConfirmation } from './content'
import { cartClose } from '../../../utils/menuSlide'
import { config } from '../../../utils/main'

const COLORS = config.colors

function renderCartItems(cartItems, props) {
    const itemList = []
    if (cartItems.cart_items) {
        const items = cartItems.cart_items
        if (!items.length) {
            return (
                <div className='cartList'>
                    <h2><span>Cart Empty</span></h2>
                </div>
            )
        }
        let cnt = 1
        for (const item of Object.keys(items)) {
            console.log(`CART Item: ${items[item]}`)
            // TODO: fix sizes prop
            itemList.push(
                <CartItem
                    key={cnt}
                    name={items[item].name}
                    sku={items[item].sku}
                    size={items[item].size}
                    sizes={items[item].sizes || true}
                    quantity={items[item].quantity}
                    price={items[item].price}
                    cartUpdate={props.cartUpdate}
                />
            )
            cnt++
        }
    }
    return (
        <ItemsContainer itemList={itemList} />
    )
}

export const Cart = (props) => {
    const [checkout, setCheckout] = useState({ showCheckout: false })
    const [cartItems, setCartItems] = useState({ showCartItems: true })
    const [shippingInfo, setShippingInfo] = useState({ show: true })
    const [payment, setPayment] = useState({ emailAddress: "", confirmationCode: "", paymentComplete: false })
    const shippingPrice = props.shippingPrice || "0.00"
    const cartTotal = Math.round((parseFloat(shippingPrice) + props.total) * 100) / 100

    function showCheckout() {
        setCheckout({ showCheckout: true })
    }

    function hideCheckout() {
        setCheckout({ showCheckout: false })
    }

    function paymentComplete(email, confirmation) {
        console.log(`COMPLETING ORDER: ${email} ${confirmation}`)
        setPayment({ emailAddress: email, confirmationCode: confirmation, paymentComplete: true })
        setShippingInfo({ show: false })
    }

    return (
        <StyledCartContainer aria-labelledby='CartContainer' className='slide_cart'>
            {cartItems.showCartItems &&
                <div className="cartItems" aria-labelledby="Cart items">
                    {renderCartItems(props.cartItems, props)}
                    <div className='cartTotal'>Subtotal: {props.total}</div>
                    {shippingInfo.show &&
                    <div>
                        <ShippingInfo shippingPrice={shippingPrice} />
                        {cartTotal > parseFloat(shippingPrice) &&
                        <div className='cartTotal'>Total: {cartTotal}</div>
                        }
                    </div>
                    }
                    {payment.paymentComplete &&
                        <OrderConfirmation email={payment.emailAddress} confirmationCode={payment.confirmationCode}/>
                    }
                </div>
            }
            <ToggleButton bgColor={COLORS.dodgerBlue} icon='faShoppingCart' runFunction={cartClose} buttonText="Close"/>
            {parseInt(props.numCartItems) > 0 &&
                <ToggleButton bgColor={COLORS.dodgerBlue} runFunction={showCheckout} buttonText="Checkout"/>
            }
            {checkout.showCheckout &&
                <div className="checkoutForm">
                <CheckoutForm
                    cart={props.cartItems}
                    cartTotal={cartTotal}
                    hideCheckout={hideCheckout}
                    resetCart={props.resetCart}
                    cartUpdate={props.cartUpdate}
                    paymentComplete={paymentComplete}
                /><img src="https://static.prod.beantownpub.com/img/square_payment.png" alt="Square payments"/></div>}
        </StyledCartContainer>
    )
}
