import React from 'react'
import { CartButton, ViewButton } from '../buttons'
import { StyledNumCartItems, StyledCartContainer, StyledCartItem } from './styles'
import { CheckoutForm } from './checkoutForm'

const slide = require('../../../utils/menuSlide')

export const NumCartItems = (props) => {
    return (
        <StyledNumCartItems>
            <div className="numCartItems">Cart Items<br />{props.children}</div>
            <div className="numCartItems">Total<br />${props.total}</div>
            <div className="numCartItemsButton">
            <ViewButton
                width='10rem'
                clicker={slide.cartOpen}
                text='view'
                icon='faShoppingCart'
            />
            </div>
        </StyledNumCartItems>
    )
}

const CartItem = (props) => {
    return (
        <StyledCartItem aria-labelledby='CartItem' bgColor='#fffdeb'>
            <div className='grid'>
                <div className='name'>{props.name}</div>
                {props.sizes == false &&
                    <div className='size'>n/a</div>
                }
                {props.sizes == true &&
                    <div className='size'>{props.size}</div>
                }
                <div className='quantity'>{props.quantity}</div>
                <div className='price'>{props.price}</div>
                <CartButton
                    clicker={props.cartUpdate}
                    text='X'
                    action='DELETE'
                    sku={props.sku}
                    size={props.size}
                    quantity={props.quantity}
                    borderColor='#e2e2e2'
                    width='min-content'
                />
            </div>
        </StyledCartItem>
    )
}

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
            itemList.push(
                <CartItem
                    key={cnt}
                    name={items[item].name}
                    sku={items[item].sku}
                    size={items[item].size}
                    sizes={items[item].sizes}
                    quantity={items[item].quantity || 1}
                    price={items[item].price}
                    cartUpdate={props.cartUpdate}
                />
            )
            cnt++
        }
    }
    return (
        <div className='cartList'>
            <h2>Cart</h2>
            {itemList}
        </div>
    )
}

export class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showCheckout: false,
            showCartItems: true
        }
        this.showCheckout = this.showCheckout.bind(this)
        this.hideCheckout = this.hideCheckout.bind(this)
        this.hideCartItems = this.hideCartItems.bind(this)
    }

    showCheckout() {
        this.setState({ showCheckout: true })
    }

    hideCheckout() {
        this.setState({ showCheckout: false })
    }

    hideCartItems() {
        this.setState({ showCartItems: false })
    }

    render () {
            const slideStyle = {
                zIndex: 1002
            }
            return (
                <div style={slideStyle} className='slide_cart'>
                    <StyledCartContainer aria-labelledby='CartContainer'>
                        {this.state.showCartItems &&
                            <div>
                            {renderCartItems(this.props.cartItems, this.props)}
                            <div className='cartTotal'>Total: {this.props.total}</div>
                            </div>
                        }

                        <ViewButton
                            aria-labelledby='CartButton'
                            borderColor='#e2e2e2'
                            clicker={slide.cartClose}
                            text='close'
                            icon='faShoppingCart'
                        />
                        {parseInt(this.props.numCartItems) > 0 &&
                            <ViewButton
                                borderColor='#e2e2e2'
                                clicker={this.showCheckout}
                                text='checkout'
                            />
                        }
                        {this.state.showCheckout &&
                        <div>
                            <CheckoutForm
                                cart={this.props.cartItems}
                                cartTotal={this.props.total}
                                hideCheckout={this.hideCheckout}
                                resetCart={this.props.resetCart}
                                cartUpdate={this.props.cartUpdate}
                            />
                            <ViewButton
                                borderColor='#e2e2e2'
                                clicker={this.hideCheckout}
                                text='hide checkout'
                            />
                        </div>}
                    </StyledCartContainer>
                </div>
            )
    }
}

export const ComingSoon = () =>  {
    return (
        <StyledCartContainer aria-labelledby='CartContainer'>
            <h3>Online ordering coming soon!</h3>
            <h3>Please come visit us purchase items in person</h3>
        </StyledCartContainer>
    )
}
