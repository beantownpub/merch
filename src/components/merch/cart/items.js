import React from 'react'
import { CartButton } from '../buttons'
import { StyledItemsTable, StyledNumCartItems } from './styles'
import { ToggleButton } from '../../elements/buttons/main'
import { cartOpen } from '../../../utils/menuSlide'
import { config } from '../../../utils/main'

const COLORS = config.colors

export const NumCartItems = (props) => {
    return (
        <StyledNumCartItems aria-labelledby="Number of items in cart">
            <div className="merchNav">
                <h3>Cart Items</h3>
                <h3>{props.children}</h3>
            </div>
            <div className="merchNav">
                <h3>Total</h3>
                <h3>{`$${props.total}`}</h3>
            </div>
            <div className="numCartItemsButton">
            <ToggleButton
                bgColor={COLORS.white}
                buttonText='view'
                icon='faShoppingCart'
                iconColor={COLORS.yellow}
                runFunction={cartOpen}
                textColor={COLORS.black}
                width='10rem'
            />
            </div>
        </StyledNumCartItems>
    )
}

export const CartItem = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.size}</td>
            <td>{props.quantity}</td>
            <td>{props.price}</td>
            <td>
            <CartButton
                clicker={props.cartUpdate}
                text='X'
                action='DELETE'
                sku={props.sku}
                size={props.size}
                quantity={props.quantity}
                bgColor='red'
                border='1px solid black'
                textColor='white'
                width='min-content'
            />
            </td>
        </tr>
    )
}

export const ItemsContainer = (props) => {
    return (
        <StyledItemsTable aria-labelledby="Cart items table">
            <h2>My Cart</h2>
            <table>
                <thead>
                    <tr><th>Name</th><th>Size</th><th>Quantity</th><th>Price</th><th>Remove</th></tr>
                </thead>
                <tbody>
                    {props.itemList}
                </tbody>
            </table>
        </StyledItemsTable>
    )
}
