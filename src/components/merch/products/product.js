import React, { useState } from "react"
import { CartButton } from "../../elements/index"
import { StyledMerchItem } from "./styles.js"
import { config } from "../../../utils/main"
import { SizeSelect } from "./sizeSelect"
import { ImageSlider } from "../../imageSliders/main"

const COLORS = config.colors
const STATIC_PATH = `${config.urls.static}/img/merch`

const InfoTable = (props) => (
  <table id={`${props.slug}-table`}>
    <tbody>
      <tr>
        <td className="itemName">{props.name}</td>
        <td className="itemPrice">{props.price}</td>
      </tr>
    </tbody>
  </table>
)

const SizeList = (props) => (
  <div id={`${props.slug}-size-list`} className="size">
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
  <div id={`${props.slug}-quantity`} className="qty">
    <label>Qty:</label>
    <input
      id={`${props.slug}-quantity-input`}
      name="quantity"
      value={props.quantity}
      onChange={props.onChange}
      placeholder="1"
      size="2"
    />
  </div>
)

const AddToCart = (props) => (
  <CartButton
    action="POST"
    bgColor={COLORS.yellow}
    border={`1px solid ${COLORS.lightGray}`}
    buttonText="Add To Cart"
    hoverBorder={`1px solid ${COLORS.yellow}`}
    hoverBackgroundColor={COLORS.black}
    hoverTextColor={COLORS.yellow}
    outerMargin="auto"
    quantity={props.qty}
    runFunction={props.runFunction}
    size={props.size}
    sku={props.sku}
    slug={props.slug}
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
  const [size, setSize] = useState({ size: "medium" })
  const [quantity, setQuantity] = useState({ quantity: 1 })

  function handleSizeChange(event) {
    setSize({ size: event.target.value })
  }

  function handleQuantityChange(event) {
    setQuantity({ quantity: event.target.value })
  }

  return (
    <StyledMerchItem aria-labelledby="Merch item container">
      <InfoTable name={props.name} price={props.price} slug={props.slug} />
      <ImageSlider images={props.images} imagePath={STATIC_PATH} sliderSettings={sliderSettings} sliderStyles={sliderStyles} />
      <p id={`${props.slug}-description`} aria-details="Merch item description">{props.description}</p>
      <SizeList onChange={handleSizeChange} inventory={props.inventory} size={size.size} hasSizes={props.sizes} slug={props.slug} />
      <Quantity onChange={handleQuantityChange} quanity={quantity.quantity} slug={props.slug} />
      <AddToCart runFunction={props.cartUpdate} size={size.size} sku={props.sku} qty={quantity.quantity} slug={props.slug} />
    </StyledMerchItem>
  )
}
