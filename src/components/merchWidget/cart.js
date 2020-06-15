import React from 'react'
import { CartButton, ViewButton } from './buttons'
import { StyledNumCartItems, StyledCartContainer, StyledCartItem } from './styles/cartStyles'
import { CheckoutForm } from './checkoutForm'

const slide = require('../menuSlide')

export class NumCartItems extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <StyledNumCartItems>
                <div>Cart Items<br /></div>
                <div>{this.props.children}</div>
                <div>Total<br /></div>
                <div>${this.props.total}</div>
                <ViewButton
                    width='10rem'
                    clicker={slide.cartOpen}
                    text='view'
                    icon='faShoppingCart'
                />
            </StyledNumCartItems>
        )
    }
}

class CartItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <StyledCartItem>
                <div className='grid'>
                    <div className='name'>{this.props.name}</div>
                    {this.props.sizes == false &&
                        <div className='size'>n/a</div>
                    }
                    {this.props.sizes == true &&
                        <div className='size'>{this.props.size}</div>
                    }
                    <div className='quantity'>{this.props.quantity}</div>
                    <div className='price'>{this.props.price}</div>
                    <CartButton
                        clicker={this.props.cartUpdate}
                        text='Remove From Cart'
                        action='DELETE'
                        sku={this.props.sku}
                        size={this.props.size}
                        quantity={this.props.quantity}
                        borderColor='#e2e2e2'
                        width='min-content'
                    />
                </div>
            </StyledCartItem>
        )
    }
}

function renderCartItems(cartItems, props) {
    const itemList = []
    if (cartItems.cart_items) {
        const items = cartItems.cart_items
        if (!items.length) {
            return (
                <div className='cartList'>
                    <h2>Shopping Cart Empty</h2>
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
            {itemList}
        </div>
    )
}

export class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showCheckout: false
        }
        this.showCheckout = this.showCheckout.bind(this)
        this.hideCheckout = this.hideCheckout.bind(this)
    }

    showCheckout() {
        this.setState({ showCheckout: true })
    }

    hideCheckout() {
        this.setState({ showCheckout: false })
    }

    render () {
            const slideStyle = {
                zIndex: 1002
            }
            return (
                <div style={slideStyle} className='slide_cart'>
                    <StyledCartContainer>
                        <h1>Cart</h1>
                        {renderCartItems(this.props.cartItems, this.props)}
                        <div className='cartTotal'>Total: {this.props.total}</div>
                        <ViewButton
                            borderColor='#e2e2e2'
                            clicker={slide.cartClose}
                            text='close'
                            icon='faShoppingCart'
                        />
                        <ViewButton
                            borderColor='#e2e2e2'
                            clicker={this.showCheckout}
                            text='checkout'
                        />
                        {this.state.showCheckout &&
                        <div>
                            <CheckoutForm cart={this.props.cartItems}/>
                            <ViewButton
                                borderColor='#e2e2e2'
                                clicker={this.hideCheckout}
                                text='hide'
                            />
                        </div>}
                    </StyledCartContainer>
                </div>
            )
    }
}
