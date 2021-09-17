// import React, { useState, useEffect } from 'react'
import React, { useState, useEffect } from 'react'
import Products from './products'
import { NumCartItems, Cart } from './cart'
import { StyledMerchContainer, StyledMerchNav } from './styles/merchStyles'
import { InfoSection, Anchor } from './../content/common'

const config = require('./merchConfig.json')
const apiUrl = process.env.MERCH_API_URL
const OPTIONS = {
    method: 'GET',
    headers: {'Content-Type': 'application/json'}
}


function makeRequest(item_name, setState, item) {
    fetch(`merch/${item_name}`, OPTIONS)
        .then(response => response.json())
        .then(data => setState({ item: data.data }))
        .catch(error => console.log(error))
}

function cartRequest(item_name, setState) {
    fetch(`cart/${item_name}`, OPTIONS)
        .then(response => response.json())
        .then(data => setState({ cartItems: data, numItemsInCart: data.cart_items.length, cartTotal: data.total }))
        .catch(error => console.log(error))
}

export const MerchDash = () => {
    const [state, setState] = useState({
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
    })
    const [updated, update] = useState(false)
    const [form, showForm] = useState(false)
    const toggleForm = () => {
        console.log('Toggling form')
        showForm(true)
    }
    useEffect(() => {
        makeRequest('accessories', setState, state.accessories)
        makeRequest('drinkware', setState, state.drinkware)
        makeRequest('hats', setState, state.hats)
        makeRequest('tshirts', setState, state.tshirts)
        
    }, [form, updated])

    const updateCart = () => {
        const options = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }
        fetch('food/categories', options)
            .then(response => response.json())
            .then(data => setState({ categories: data.data, new: data.data }))
            .then(update(true))
            .catch(error => console.log(error))
    }

    const renderCategories = (categories) => {
        // const cats = state.categories
        const cats = categories.map((category) =>
        <CategoryCard
            key={category.id.toString()}
            name={category.name}
            isActive={category.is_active}
            items={category.items}
            runFunction={updateCategories}
            showForm={form}
        />);
        return (
            <StyledCategoriesContainer>
                <h1>Categories</h1>
                <NewCategoryForm showForm={form} runFunction={updateCategories} />
                {cats}
            </StyledCategoriesContainer>
        )
    }

    return (
        <div>
            {state.categories &&
                <div>{renderCategories(state.categories)}</div>
            }
        </div>
    )
}

const CategoryContainer = (props) => {
    return (
        <div className='categoryContainer'>
            <h1 id={props.anchor}>{props.title}</h1>
            <div className='category'>
                <Products products={props.products} cartUpdate={props.updateCart} />
            </div>
        </div>
    )
}

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
                            <CategoryContainer products={this.state.tshirts} updateCart={this.updateCart} title="Shirts" anchor="#shirts" />}
                        {this.state.showHats &&
                            <CategoryContainer products={this.state.hats} updateCart={this.updateCart} title="Hats" anchor="#hats" />}
                        {this.state.showDrinkware &&
                            <CategoryContainer products={this.state.drinkware} updateCart={this.updateCart} title="Drinkware" anchor="#drinkware" />}
                        {this.state.accessories &&
                            <CategoryContainer products={this.state.accessories} updateCart={this.updateCart} title="Accessories" anchor="#accessories" />}
                    </div>
                </InfoSection>
            </StyledMerchContainer>
        )
    }
}
