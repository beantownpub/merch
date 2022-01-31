import React, { useState, useEffect } from 'react'
import { StyledContentContainer, StyledDashContainer, StyledMerchNav } from './styles/main'
import { CategoryCards } from './products/main'
import { Cart } from './cart/main'
import { NumCartItems } from './cart/items'
import { config, getOptions } from '../../utils/main'
const COLORS = config.colors

export const MerchDash = () => {
    const [state, setState] = useState({ categories: [] })
    const [cart, setCart] = useState({
        showCart: false,
        cartId: "",
        cartItems: [],
        numItemsInCart: 0,
        cartTotal: 0.00
    })
    useEffect(() => {
        fetch('merchandise', getOptions)
            .then(response => response.json())
            .then(data => data.data)
            .then(data => setState({ categories: data }))
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        fetch('cart', {credentials: "include", headers: {'Content-Type': 'application/json'}})
            .then(response => response.json())
            .then(data => data.data)
            .then(data => setCart({ cartId: data.cart_id, cartItems: data, numItemsInCart: data.cart_items.length, cartTotal: data.total }))
            .catch(error => console.log(error, cart))
    }, [])

    function resetCart() {
        console.log(`Cart reset: ${cart.cartId}`)
        const itemData = { id: cart.cartId }
        fetch('cart/empty', {method: "DELETE", credentials: "include", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(itemData)})
            .then(response => response.json())
            .then(data => data.data)
            .then(data => setCart({ cartId: data.cart_id, cartItems: data, numItemsInCart: data.cart_items.length, cartTotal: data.total }))
            .catch(error => console.log(error, cart))
    }

    function updateCart(sku, quantity, size, action) {
        console.log(`updateCart | Sku: ${sku} | Quantity: ${quantity} | Size: ${size} | Action: ${action}`)
        const itemData = {
            sku: sku,
            quantity: quantity,
            size: size
        }
        fetch('cart', {method: action, credentials: "include", body: JSON.stringify(itemData), headers: {"Content-Type": "application/json"}})
            .then(response => response.json())
            .then(data => data.data)
            .then(data => setCart({ cartId: data.cart_id, cartItems: data, numItemsInCart: data.cart_items.length, cartTotal: data.total }))
            .catch(error => console.log(error))
    }

    return (
        <div>
            {state.categories ?
                <StyledDashContainer aria-labelledby="Merch Dash">
                    <Cart
                        cartItems={cart.cartItems}
                        total={cart.cartTotal}
                        cartUpdate={updateCart}
                        resetCart={resetCart}
                        numCartItems={cart.numItemsInCart}
                    />
                    <StyledMerchNav aria-labelledby="Merch Nav">
                        <NumCartItems total={cart.cartTotal}>{cart.numItemsInCart}</NumCartItems>
                    </StyledMerchNav>
                    <CategoryCards categories={state.categories} cartUpdate={updateCart} />
                </StyledDashContainer> :
                <StyledContentContainer margin="10rem auto 3rem auto" fontColor={COLORS.white} backgroundColor={COLORS.black} maxWidth="30rem">
                    <h1>Online merchandise is currently unavailable. Stop by the pub and purchase in person!</h1>
                </StyledContentContainer>
            }
        </div>
    )
}
