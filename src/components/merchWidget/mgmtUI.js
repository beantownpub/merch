import React from 'react'
import Products from './products'
import { ViewButton } from './buttons'
import { StyledMerchContainer } from './styles/merchStyles'

const config = require('./merchConfig.json')

export default class Merch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showProductForm: false,
            products: [],
        }
        this.updateProduct = this.updateProduct.bind(this)
        this.showForm = this.showForm.bind(this)
        this.hideForm = this.hideForm.bind(this)
    }

    componentDidMount() {
        let productsUrl = config.urls.products
        fetch(`${productsUrl}/tshirts`)
            .then(response => response.json())
            .then(data => this.setState({ products: data }))
            .catch(error => console.log(error))
    }

    updateProduct(sku, quantity, size, action) {
        const itemData = {
            sku: sku,
            quantity: quantity,
            size: size
        }
        const url = config.urls.cart
        fetch(url, {method: action, credentials: 'include', body: JSON.stringify(itemData), headers: {'Content-Type': 'application/json'}})
            .then(response => response.json())
            .then(data => this.setState({ cartItems: data, numItemsInCart: data.cart_items.length, cartTotal: data.total }))
            .catch(error => console.log(error))
    }

    showForm(form) {
        if (form === 'newProduct') {
            this.setState({ showProductForm: true })
        }
    }

    hideForm(form) {
        if (form === 'newProduct') {
            this.setState({ showProductForm: false })
        }
    }

    render() {
        return (
            <StyledMerchContainer>
                <ViewButton clicker={this.showForm} form='newProduct' text='Add Product' />
            </StyledMerchContainer>
        )
    }
}
