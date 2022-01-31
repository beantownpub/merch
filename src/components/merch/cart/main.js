import React, { useState } from 'react'
import { ToggleButton } from '../../elements/buttons/main'
import { StyledCartContainer } from './styles'
import { CheckoutForm } from './forms/main'
import { CartItem, ItemsContainer } from './items'
import { ShippingInfo } from './content'
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

    function showCheckout() {
        setCheckout({ showCheckout: true })
    }

    function hideCheckout() {
        setCheckout({ showCheckout: false })
    }

    return (
        <StyledCartContainer aria-labelledby='CartContainer' className='slide_cart'>
            {cartItems.showCartItems &&
                <div aria-labelledby='Cart items'>
                    {renderCartItems(props.cartItems, props)}
                    <ShippingInfo shippingPrice="5.99" />
                    <div className='cartTotal'>Subtotal: {props.total}</div>
                </div>
            }
            <ToggleButton bgColor={COLORS.dodgerBlue} icon='faShoppingCart' runFunction={cartClose} buttonText="Close"/>
            {parseInt(props.numCartItems) > 0 &&
                <ToggleButton bgColor={COLORS.dodgerBlue} runFunction={showCheckout} buttonText="Checkout"/>
            }
            {checkout.showCheckout &&
                <CheckoutForm
                    cart={props.cartItems}
                    cartTotal={props.total}
                    hideCheckout={hideCheckout}
                    resetCart={props.resetCart}
                    cartUpdate={props.cartUpdate}
                />}
        </StyledCartContainer>
    )
}
