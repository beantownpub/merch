import React, { useState } from 'react'
import { ToggleButton } from '../../elements/buttons/main'
import { StyledCartContainer } from './styles'
import { CheckoutForm } from './forms/main'
import { CartItem, ItemsContainer } from './items'
import { OrderConfirmation, OrderFailed, ShippingInfo } from '../content/index'
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
      // console.log(`CART Item: ${items[item]}`)
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
  const [checkout, setCheckout] = useState({ showCheckout: false, showCheckoutButton: true })
  const [cartItems, setCartItems] = useState({ showCartItems: true })
  const [shippingInfo, setShippingInfo] = useState({ show: true })
  const [payment, setPayment] = useState({ emailAddress: "", confirmationCode: "", paymentComplete: false, paymentFailed: false })
  const shippingPrice = config.orders.shippingPrice
  const cartTotal = Math.round((parseFloat(shippingPrice) + props.total) * 100) / 100

  function showCheckout() {
    setCheckout({ showCheckout: true, showCheckoutButton: false })
  }

  function hideCheckout() {
    setCheckout({ showCheckout: false, showCheckoutButton: true })
  }

  function paymentComplete(email, confirmation) {
    // console.log(`COMPLETING ORDER: ${email} ${confirmation}`)
    setPayment({ emailAddress: email, confirmationCode: confirmation, paymentComplete: true })
    setShippingInfo({ show: false })
  }

  function paymentFailed() {
    setPayment({ paymentFailed: true })
  }

  return (
    <StyledCartContainer id="cartContainer" aria-details='CartContainer' className='slide_cart'>
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
          {payment.paymentFailed &&
            <OrderFailed email={process.env.SUPPORT_EMAIL} h1Color={COLORS.red} />
          }
        </div>
      }
      <ToggleButton bgColor={COLORS.dodgerBlue} icon='faShoppingCart' runFunction={cartClose} buttonText="Close" slug="close" />
      {parseInt(props.numCartItems) > 0 && checkout.showCheckoutButton &&
        <ToggleButton bgColor={COLORS.dodgerBlue} runFunction={showCheckout} buttonText="Checkout" slug="checkout" />
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
            paymentFailed={paymentFailed}
          /><img src={`${config.urls.static}/img/square_payment.png`} alt="Square payments"/>
        </div>
      }
      <a href="/returns">Return &amp; Refund Policy</a>
    </StyledCartContainer>
  )
}
