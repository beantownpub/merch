// import React, { useState } from 'react'
import React from 'react'
import MenuIcon, { getIcon } from '../icons'
import { StyledButton, iconStyle } from './styles/buttonStyles'

export class CartButton extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.clicker(this.props.sku, this.props.quantity, this.props.size, this.props.action)
    }
    render() {
        return(
            <StyledButton borderColor={this.props.borderColor} buttonWidth={this.props.width} id='CartButton'>
                <button onClick={this.handleClick}>{this.props.text}</button>
            </StyledButton>
		)
    }
}

export class ViewButton extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        if (this.props.clicker) {
            if (this.props.category) {
                this.props.clicker(this.props.category)
            } else {
                this.props.clicker()
            }
        }
    }

    render() {
        return(
            <StyledButton borderColor={this.props.borderColor} width={this.props.width}>
                <button onClick={this.handleClick}>
                    {this.props.icon &&
                        <MenuIcon style={iconStyle} name={getIcon(this.props.icon)} />}{this.props.text}</button>
            </StyledButton>
		)
    }
}
