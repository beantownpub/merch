import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Icon } from "../../../content/icons/index"
import { SubmitButton, ToggleButton } from "../../../elements/buttons/main"
import { StyledCheckoutForm } from "./styles.js"
import { PaymentForm } from "../../square/forms/main"
import { config } from "../../../../utils/main"

const COLORS = config.colors

const stateVerify = {
    required: "Required",
    pattern: {
        value: /^[A-Za-z]{2}$/i,
        message: "invalid state"
    }
}

const emailVerify = {
    required: "Required",
    pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "invalid email address"
    }
}

const zipVerify = {
    required: "Required",
    pattern: {
        value: /^[0-9]{5}$/i,
        message: "invalid zip code"
    }
}

const required = {
    required: "Required"
}

export const CheckoutForm = (props) => {
  const [checkout, setCheckout] = useState({
    showPayment: false,
    showShipping: false,
    sameShippingAndBilling: true,
    cartValues: {}
  })
  const { handleSubmit, register, errors, reset } = useForm()
  const [checkoutForm, setCheckoutForm] = useState({
    showForm: true
  })

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
        cartValues: values
      })
    } else {
      setCheckout({
        showPayment: true,
        showShipping: true,
        cartValues: values
      })
    }
  }

  function hideSquare() {
    setCheckout({ showPayment: false })
  }

  function hideForm() {
    setCheckoutForm({ showForm: false })
  }

  return (
    <div>
      <StyledCheckoutForm aria-details="Checkout form" id="checkoutForm">
        {checkoutForm.showForm &&
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>
              <Icon
                style={{fontSize: ".75rem", margin: "auto"}}
                iconName="faLock"
              /> Secure Checkout
            </h2>
            <div className="billingAddress">Billing Address</div>
            <input name="firstName" placeholder="First Name" ref={register(required)} />
            <h3>{errors.firstName && errors.firstName.message}</h3>
            <input name="lastName" placeholder="Last Name" ref={register(required)} />
            <h3>{errors.lastName && errors.lastName.message}</h3>
            <input name="street" placeholder="Street" ref={register(required)} />
            <h3>{errors.street && errors.street.message}</h3>
            <input name="unit" placeholder="unit/apt" ref={register()} />
            <input name="city" placeholder="City" ref={register(required)} />
            <h3>{errors.city && errors.city.message}</h3>

            <div className="stateZip">
              <label>State</label>
              <input name="state" size="2" ref={register(stateVerify)} />
              <h3>{errors.state && errors.state.message}</h3>
              <label>Zip</label>
              <input name="zipCode" size="5" ref={register(zipVerify)} />
              <h3>{errors.zipCode && errors.zipCode.message}</h3>
            </div>

            <input name="email" placeholder="Email" ref={register(emailVerify)} />
            <h3>{errors.email && errors.email.message}</h3>

            <div className="billingAddress">Shipping Address</div>
            <div className="sameAsBillingAddress">
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
              <input name="shippingFirstName" placeholder="First Name" ref={register(required)} />
              <h3>{errors.shippingFirstName && errors.shippingFirstName.message}</h3>
              <input name="shippingLastName" placeholder="Last Name" ref={register(required)} />
              <h3>{errors.shippingLastName && errors.shippingLastName.message}</h3>
              <input name="shippingStreet" placeholder="Street" ref={register(required)}/>
              <h3>{errors.street && errors.street.message}</h3>
              <input name="shiipingUnit" placeholder="unit/apt" ref={register()} />
              <input name="shippingCity" placeholder="City" ref={register(required)} />
              <h3>{errors.city && errors.city.message}</h3>

              <div className="stateZip">
                <label>State</label>
                <input name="shippingState" size="2" ref={register(stateVerify)} />
                <h3>{errors.shippingState && errors.shippingState.message}</h3>
                <label>Zip</label>
                <input name="shippingZip" size="5" ref={register(zipVerify)} />
                <h3>{errors.shippingZip && errors.shippingZip.message}</h3>
              </div>
            </div>
          }
          {checkout.showPayment &&
            <PaymentForm
              cartTotal={props.cartTotal}
              formReset={reset}
              hideForm={hideForm}
              hideCheckout={props.hideCheckout}
              resetCart={props.resetCart}
              cartUpdate={props.cartUpdate}
              hideSquare={hideSquare}
              cartValues={checkout.cartValues}
              paymentComplete={props.paymentComplete}
              paymentFailed={props.paymentFailed}
              showSquare={true}>
            </PaymentForm>
          }
          {!checkout.showPayment &&
            <div className="payButtons">
            <SubmitButton bgColor={COLORS.dodgerBlue} buttonText="Proceed to payment" slug="proceed-to-payment" />
            </div>
          }
          <ToggleButton bgColor={COLORS.dodgerBlue} runFunction={props.hideCheckout} buttonText="Hide checkout" slug="hide-checkout" />
          </form>
        }
      </StyledCheckoutForm>
    </div>
  )
}
