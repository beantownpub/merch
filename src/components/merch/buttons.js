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
        console.log(`${this.props.sku} | ${this.props.quantity} | ${this.props.size} | ${this.props.action}`)
        this.props.clicker(this.props.sku, this.props.quantity, this.props.size, this.props.action)
    }
    render() {
        return(
            <StyledButton
                aria-labelledby={this.props.ariaLabel}
                border={this.props.border}
                width={this.props.width}
                bgColor={this.props.bgColor}
                outerMargin={this.props.outerMargin}
                outerPadding={this.props.outerPadding}
                padding={this.props.padding}
                textColor={this.props.textColor}
            >
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
            <StyledButton
                borderColor={this.props.borderColor}
                width={this.props.width}
            >
                <button onClick={this.handleClick}>
                    {this.props.icon &&
                        <MenuIcon style={iconStyle} name={getIcon(this.props.icon)} />}{this.props.text}</button>
            </StyledButton>
		)
    }
}
