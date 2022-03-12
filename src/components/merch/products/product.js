import React, { useState } from 'react'
import { CartButton } from '../../elements/buttons/main'
import { StyledMerchItem } from './styles'
import { config } from '../../../utils/main'

const COLORS = config.colors

const ListSelect = (props, { onSizeChange }) => {
  console.log('ListSelect')
  console.log(Object.keys(props))
  return (
    <div>
      <label>Size: </label>
      <select onChange={onSizeChange} defaultValue="med">
        {props.inventory.small > 0 &&
          <option onChange={onSizeChange} value="sma">Small</option>
        }
        {props.inventory.medium > 0 &&
          <option onChange={onSizeChange} value="medium">Medium</option>
        }
        <option onChange={onSizeChange} value="lg">Large</option>
        <option onChange={onSizeChange} value="xl">XL</option>
        {props.inventory.xxl > 0 &&
          <option onChange={onSizeChange} value="xxl">XXL</option>
        }
      </select>
      <br />
    </div>
  )
}

export const ProductCard = (props) => {
  console.log('INVENTORY')
  console.log(Object.keys(props.inventory))
  const staticPath = `${config.urls.static}/img/merch/`
  const [size, setSize] = useState({ size: 'med' })
  const [quantity, setQuantity] = useState({ quantity: 1 })

  function handleSizeChange(event) {
    setSize({ size: event.target.value })
  }

  function handleQuantityChange(event) {
    setQuantity({ quantity: event.target.value })
  }

  return (
    <StyledMerchItem aria-labelledby="Merch item container">
      <table>
        <tbody>
          <tr>
            <td className="itemName">{props.name}</td>
            <td className="itemPrice">{props.price}</td>
          </tr>
        </tbody>
      </table>
      <img src={`${staticPath}${props.imgName}`} alt={props.name} />
      <p>{props.description}</p>
      <div className='size'>
          {props.sizes == true &&
              <ListSelect
                  onSizeChange={handleSizeChange}
                  inventory={props.inventory}
                  name={props.name}
              />}
      </div>
      <div className='qty'>
        <label>Qty:</label>
        <input
          name='quantity'
          value={quantity.quantity}
          onChange={handleQuantityChange}
          placeholder='1'
          size='2'
        />
      </div>
      <CartButton
        runFunction={props.cartUpdate}
        buttonText='Add To Cart'
        action='POST'
        size={size.size}
        quantity={quantity.quantity}
        sku={props.sku}
        noSize={props.sizes}
        bgColor={COLORS.yellow}
        border={`1px solid ${COLORS.lightGray}`}
        hoverBorder={`1px solid ${COLORS.yellow}`}
        hoverBackgroundColor={COLORS.black}
        hoverTextColor={COLORS.yellow}
        outerMargin='auto'
        textColor={COLORS.black}
      />
    </StyledMerchItem>
  )
}
