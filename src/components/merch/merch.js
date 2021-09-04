// import React, { useState, useEffect } from 'react'
import React from 'react'
import Products from './products'
import { NumCartItems, Cart } from './cart'
import { StyledMerchContainer, StyledMerchNav } from './styles/merchStyles'
import { InfoSection, Anchor } from './../content/common'

const config = require('./merchConfig.json')
const apiUrl = process.env.MERCH_API_URL


export default class Merch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showCart: false,
            cartItems: [],
            products: [],
            numItemsInCart: 0,
            cartTotal: 0.00,
            tshirts: [],
            accessories: [],
            hats: [],
            drinkware: [],
            showTshirts: true,
            showAccessories: true,
            showHats: true,
            showDrinkware: true
        }
        this.updateCart = this.updateCart.bind(this)
        this.resetCart = this.resetCart.bind(this)
        this.showCategory = this.showCategory.bind(this)
        this.hideCategory = this.hideCategory.bind(this)
    }

    componentDidMount() {
        let productsUrl = `${apiUrl}${config.uris.products}`
        let cartItemsUrl = `${apiUrl}${config.uris.cart}`
        fetch(`${productsUrl}/tshirts`)
            .then(response => response.json())
            .then(data => this.setState({ tshirts: data }))
            .catch(error => console.log(error))
        fetch(`${productsUrl}/accessories`)
            .then(response => response.json())
            .then(data => this.setState({ accessories: data }))
            .catch(error => console.log(error))
        fetch(`${productsUrl}/hats`)
            .then(response => response.json())
            .then(data => this.setState({ hats: data  }))
            .catch(error => console.log(error))
        fetch(`${productsUrl}/drinkware`)
            .then(response => response.json())
            .then(data => this.setState({ drinkware: data }))
            .catch(error => console.log(error))
        fetch(cartItemsUrl, {credentials: 'include'})
            .then(response => response.json())
            .then(data => this.setState({ cartItems: data, numItemsInCart: data.cart_items.length, cartTotal: data.total }))
            .catch(error => console.log(error, this.state))
    }

    resetCart() {
        console.log('RESETTING CART')
        let cartUrl = `${apiUrl}${config.uris.cart}`
        console.log(cartUrl)
        fetch(cartUrl, {credentials: 'include'})
            .then(response => response.json())
            .then(data => this.setState({ cartItems: data, numItemsInCart: data.cart_items.length, cartTotal: data.total }))
            .catch(error => console.log(error, this.state))
    }

    updateCart(sku, quantity, size, action) {
        console.log(`updateCart | Action: ${action} | Sku: ${sku}`)
        const itemData = {
            sku: sku,
            quantity: quantity,
            size: size
        }
        const url = `${apiUrl}${config.uris.cart}`
        fetch(url, {method: action, credentials: 'include', body: JSON.stringify(itemData), headers: {'Content-Type': 'application/json'}})
            .then(response => response.json())
            .then(data => this.setState({ cartItems: data, numItemsInCart: data.cart_items.length, cartTotal: data.total }))
            .catch(error => console.log(error))
    }

    showCategory(category) {
        console.log(`Show Category ${category}`)
        if (category === 'tshirts') {
            this.setState({ showTshirts: true })
        }
        if (category === 'accessories') {
            this.setState({ showAccessories: true })
        }
        if (category === 'hats') {
            this.setState({ showHats: true })
        }
        if (category === 'drinkware') {
            this.setState({ showDrinkware: true })
        }
    }

    hideCategory(category) {
        console.log(`Hide Category ${category}`)
        if (category === 'tshirts') {
            this.setState({ showTshirts: false })
        }
        if (category === 'accessories') {
            this.setState({ showAccessories: false })
        }
        if (category === 'hats') {
            this.setState({ showHats: false })
        }
        if (category === 'drinkware') {
            this.setState({ showDrinkware: false })
        }
    }

    render() {
        return (
            <StyledMerchContainer>
                <StyledMerchNav id="topAnchor">
                    <Cart
                        cartItems={this.state.cartItems}
                        total={this.state.cartTotal}
                        cartUpdate={this.updateCart}
                        resetCart={this.resetCart}
                        numCartItems={this.state.numItemsInCart}
                    />
                    <NumCartItems total={this.state.cartTotal}>{this.state.numItemsInCart}</NumCartItems>
                    <div className='productNav'>
                        <Anchor target='#shirts' text='tshirts' icon='faTshirt' borderColor='#e2e2e2' />
                        <Anchor target='#accessories' text='accessories' icon='faTshirt' borderColor='#e2e2e2' />
                        <Anchor target='#hats' text='hats' icon='faHatCowboy' borderColor='#e2e2e2' />
                        <Anchor target='#drinkware' text='drinkware' icon='faBeer' borderColor='#e2e2e2' />
                    </div>
                </StyledMerchNav>
                <InfoSection
                    bgColor='#383838'
                    textAlign='center'
                    marginTop='2rem'
                    paddingTop='0'
                    paddingBottom='0'
                    paddingLeft='0'
                    paddingRight='0'>
                    <div className='products'>
                        {this.state.showTshirts &&
                            <div className='categoryContainer'>
                                <h1 id="#shirts">Shirts</h1>
                                <div className='category'>
                                    <Products products={this.state.tshirts} cartUpdate={this.updateCart} />
                                </div>
                                <div className="anchorButton"><a href="#topAnchor">TOP</a></div>
                            </div>}
                        {this.state.showHats &&
                        <div className='categoryContainer'>
                            <h1 id="#drinkware">Hats</h1>
                            <div className='category'>
                                <Products products={this.state.hats} cartUpdate={this.updateCart} sizes={false} />
                            </div>
                            <div className="anchorButton"><a href="#topAnchor">TOP</a></div>
                        </div>}
                        {this.state.showDrinkware &&
                        <div className='categoryContainer'>
                            <h1 id="#drinkware">Drinkware</h1>
                            <div className='category'>
                                <Products products={this.state.drinkware} cartUpdate={this.updateCart} sizes={false} />
                            </div>
                            <div className="anchorButton"><a href="#topAnchor">TOP</a></div>
                        </div>}
                        {this.state.accessories &&
                            <div id="#accessories" className='categoryContainer'>
                                <h1 id="#accessories">Accessories</h1>
                                <div className='category'>
                                    <Products products={this.state.accessories} cartUpdate={this.updateCart} />
                                </div>
                                <div className="anchorButton"><a href="#topAnchor">TOP</a></div>
                            </div>}
                    </div>
                </InfoSection>
            </StyledMerchContainer>
        )
    }
}
