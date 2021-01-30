import React from 'react'
import { CartButton } from './buttons'
import { StyledProductsContainer, StyledProduct } from './styles/productStyles'

// staticUrl = "https://dummyimage.com/280x420/12ff51/000000"
// const staticPath = "https://static.dev.beantownpub.com/img/merch/"
const staticPath = "/images/merch/"

const ListSelect = ({ onSizeChange }) => (
    <div>
        <label>Size: </label>
        <select onChange={onSizeChange} defaultValue="med">
            <option onChange={onSizeChange} value="sma">Small</option>
            <option onChange={onSizeChange} value="med">Medium</option>
            <option onChange={onSizeChange} value="lg">Large</option>
            <option onChange={onSizeChange} value="xl">XL</option>
            <option onChange={onSizeChange} value="xxl">XXL</option>
        </select>
        <br />
    </div>
)

function renderProducts(products, props) {
    const productList = []
    let cnt = 1
    for (const product of Object.keys(products)) {
        productList.push(
            <Product
                key={cnt}
                sku={products[product].sku}
                name={products[product].name}
                description={products[product].description}
                price={products[product].price}
                cartUpdate={props.cartUpdate}
                oneSize={products[product].one_size}
                sizes={products[product].sizes}
                imgName={products[product].img_name}
                category={products[product].category}
            />
        )
        cnt++
    }
    return (
        <div className='productList'>
            {productList}
        </div>
    )
}

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 1,
            size: 'med',
        }
        this.handleSizeChange = this.handleSizeChange.bind(this)
        this.handleQuantityChange = this.handleQuantityChange.bind(this)
    }

    handleSizeChange(event) {
        const size = event.target.value;
        this.setState(() => {
            return {
                size,
            }
        })
    }

    handleQuantityChange(event) {
        const quantity = event.target.value;
        this.setState(() => {
            return {
                quantity,
            }
        })
    }

    render() {
        return (
            <StyledProduct>
                <div id={`#${this.props.category}`}>{this.props.name}</div>
                <div className='description'>{this.props.description}</div>
                <img src={`${staticPath}${this.props.imgName}`} alt={this.props.name} />
                <div className='purchaseInfo'>
                    <div className='price'><label>{this.props.price}</label></div>
                    <div className='size'>
                        {this.props.sizes == true &&
                            <ListSelect
                                onSizeChange={this.handleSizeChange}
                                name={this.props.name}
                            />}
                    </div>
                    <div className='qty'>
                        <label>Qty:</label>
                        <input
                            name='quantity'
                            value={this.state.quantity}
                            onChange={this.handleQuantityChange}
                            placeholder='1'
                            size='2'
                        />
                    </div>
                </div>
                <CartButton
                    clicker={this.props.cartUpdate}
                    text='Add To Cart'
                    action='POST'
                    size={this.state.size}
                    quantity={this.state.quantity}
                    sku={this.props.sku}
                    noSize={this.props.sizes}
                    borderColor='#e2e2e2'
                />
            </StyledProduct>
        )
    }
}

export default class Products extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <StyledProductsContainer>
                {renderProducts(this.props.products, this.props)}
            </StyledProductsContainer>
        )
    }
}