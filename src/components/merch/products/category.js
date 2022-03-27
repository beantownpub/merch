import React from "react"
import { StyledMerchSection } from "./styles"
import { ProductCard } from "./product"

const Product = (props) => (
  <ProductCard
    inventory={props.item.inventory}
    name={props.item.name}
    price={props.item.price}
    description={props.item.description}
    sku={props.item.id}
    cartUpdate={props.cartUpdate}
    images={props.item.images}
    imgName={props.item.image_name}
    category={props.item.category_id}
    sizes={props.hasSizes}
    slug={props.item.slug}
  />
)

export const CategoryCard = (props) => {
  const renderItems = (items) => {
    const productList = []
    for (const item of Object.values(items)) {
      if (item.inventory.total > 0) {
        productList.push(
          <Product key={item.id} item={item} cartUpdate={props.cartUpdate} hasSizes={props.hasSizes} />
        )
      }
    }
    return (
      <div className="sectionItems" aria-labelledby="Category card items Container">
        {productList}
      </div>
    )
  }

  return (
    <StyledMerchSection aria-labelledby="Merch section" orderNumber={props.orderNumber}>
      {props.items &&
        <h2 className="sectionTitle">{props.name}</h2>
      }
      {props.description &&
        <h3>{props.description}</h3>
      }
        {renderItems(props.items)}
    </StyledMerchSection>
  )
}
