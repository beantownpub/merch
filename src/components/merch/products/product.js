import React, { useState } from 'react'
import { CartButton } from '../../elements/index'
import { StyledMerchItem } from './styles'
import { config } from '../../../utils/main'
import { SizeSelect } from './sizeSelect'
import { ImageSlider } from '../../imageSliders/main'

const COLORS = config.colors
const STATIC_PATH = `${config.urls.static}/img/merch`

const InfoTable = (props) => (
  <table>
    <tbody>
      <tr>
        <td className="itemName">{props.name}</td>
        <td className="itemPrice">{props.price}</td>
      </tr>
    </tbody>
  </table>
)

const SizeList = (props) => (
  <div className='size'>
    {props.hasSizes == true &&
      <SizeSelect
          onSizeChange={props.onChange}
          inventory={props.inventory}
          size={props.size}
      />
    }
  </div>
)

const Quantity = (props) => (
  <div className='qty'>
    <label>Qty:</label>
    <input
      name='quantity'
      value={props.quantity}
      onChange={props.onChange}
      placeholder='1'
      size='2'
    />
  </div>
)

const AddToCart = (props) => (
  <CartButton
    runFunction={props.runFunction}
    buttonText='Add To Cart'
    action='POST'
    size={props.size}
    quantity={props.qty}
    sku={props.sku}
    bgColor={COLORS.yellow}
    border={`1px solid ${COLORS.lightGray}`}
    hoverBorder={`1px solid ${COLORS.yellow}`}
    hoverBackgroundColor={COLORS.black}
    hoverTextColor={COLORS.yellow}
    outerMargin='auto'
    textColor={COLORS.black}
  />
)

const sliderStyles = {
  marginTop: "1rem",
  marginRight: "unset",
  marginLeft: "unset",
  img: {}
}

const sliderSettings = {
  dots: true,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 8500,
  pauseOnHover: false,
  swipeToSlide: true,
  fade: true,
  infinite: true,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1
}

export const ProductCard = (props) => {
  console.log(props.images)
  const [size, setSize] = useState({ size: 'medium' })
  const [quantity, setQuantity] = useState({ quantity: 1 })

  function handleSizeChange(event) {
    setSize({ size: event.target.value })
  }

  function handleQuantityChange(event) {
    setQuantity({ quantity: event.target.value })
  }

  return (
    <StyledMerchItem aria-labelledby="Merch item container">
      <InfoTable name={props.name} price={props.price} />
      <ImageSlider images={props.images} imagePath={STATIC_PATH} sliderSettings={sliderSettings} sliderStyles={sliderStyles} />
      <p>{props.description}</p>
      <SizeList onChange={handleSizeChange} inventory={props.inventory} size={size.size} hasSizes={props.sizes}/>
      <Quantity onChange={handleQuantityChange} quanity={quantity.quantity} />
      <AddToCart runFunction={props.cartUpdate} size={size.size} sku={props.sku} qty={quantity.quantity}/>
    </StyledMerchItem>
  )
}
