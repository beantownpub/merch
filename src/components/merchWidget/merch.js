// import React, { useState, useEffect } from 'react'
import React from 'react'
import Products from './products'
import { NumCartItems, Cart } from './cart'
import { ViewButton } from './buttons'
import { StyledMerchContainer } from './styles/merchStyles'
import { InfoSection } from './../common'

const config = require('./merchConfig.json')
let apiUrl = process.env.MERCH_API_URL || config.apiUrl

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
            sweatshirts: [],
            hats: [],
            drinkware: [],
            showTshirts: false,
            showSweatshirts: false,
            showHats: false,
            showDrinkware: false
        }
        this.updateCart = this.updateCart.bind(this)
        this.showCategory = this.showCategory.bind(this)
        this.hideCategory = this.hideCategory.bind(this)
    }

    componentDidMount() {
        let productsUrl = `${apiUrl}${config.uris.products}`
        let cartItemsUrl = `${apiUrl}${config.uris.cart}`
        console.log(`PRODUCTS URL: ${productsUrl}`)
        console.log(`CART URL: ${cartItemsUrl}`)
        fetch(`${productsUrl}/tshirts`)
            .then(response => response.json())
            .then(data => this.setState({ tshirts: data }))
            .catch(error => console.log(error))
        fetch(`${productsUrl}/sweatshirts`)
            .then(response => response.json())
            .then(data => this.setState({ sweatshirts: data }))
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
        if (category === 'sweatshirts') {
            this.setState({ showSweatshirts: true })
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
        if (category === 'sweatshirts') {
            this.setState({ showSweatshirts: false })
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
                <div className='gutter'>
                    <Cart
                        cartItems={this.state.cartItems}
                        total={this.state.cartTotal}
                        cartUpdate={this.updateCart}
                    />
                    <NumCartItems total={this.state.cartTotal}>{this.state.numItemsInCart}</NumCartItems>
                    <ViewButton clicker={this.showCategory} category='tshirts' text='tshirts' icon='faTshirt' />
                    <ViewButton clicker={this.showCategory} category='sweatshirts' text='sweatshirts' icon='faTshirt' />
                    <ViewButton clicker={this.showCategory} category='hats' text='hats' icon='faHatCowboy' />
                    <ViewButton clicker={this.showCategory} category='drinkware' text='drinkware' icon='faBeer' />
                </div>
                <InfoSection bgColor='#fcba03' textAlign='center'>
                    <h1>Merch</h1>
                    <h2>Online Orders<br />Coming Soon!</h2>
                </InfoSection>
                <div className='products'>
                    {this.state.showTshirts &&
                        <div className='categoryContainer'>
                            <div className='category'>
                                <Products products={this.state.tshirts} cartUpdate={this.updateCart} />
                            </div>
                            <ViewButton borderColor='#e2e2e2' clicker={this.hideCategory} category='tshirts' text='hide' icon='faTshirt' />
                        </div>}
                    {this.state.showSweatshirts &&
                        <div className='categoryContainer'>
                            <div className='category'>
                                <Products products={this.state.sweatshirts} cartUpdate={this.updateCart} />
                            </div>
                            <ViewButton borderColor='#e2e2e2' clicker={this.hideCategory} category='sweatshirts' text='hide' icon='faTshirt' />
                        </div>}
                    {this.state.showHats &&
                    <div className='categoryContainer'>
                        <div className='category'>
                            <Products products={this.state.hats} cartUpdate={this.updateCart} sizes={false} />
                        </div>
                            <ViewButton borderColor='#e2e2e2' clicker={this.hideCategory} category='hats' text='hide' icon='faHatCowboy' />
                    </div>}
                    {this.state.showDrinkware &&
                    <div className='categoryContainer'>
                        <div className='category'>
                            <Products products={this.state.drinkware} cartUpdate={this.updateCart} sizes={false} />
                        </div>
                        <ViewButton borderColor='#e2e2e2' clicker={this.hideCategory} category='drinkware' text='hide' icon='faBeer' />
                    </div>}
                </div>
            </StyledMerchContainer>
        )
    }
}
