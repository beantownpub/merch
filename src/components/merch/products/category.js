import React from 'react'
import { StyledMerchSection } from './styles'
import { ProductCard } from './product'

export const CategoryCard = (props) => {
  const renderItems = (items) => {
    const productList = []
    for (const item of Object.values(items)) {
      if (item.inventory.total > 0) {
        productList.push(
          <ProductCard
            inventory={item.inventory}
            key={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            sku={item.id}
            cartUpdate={props.cartUpdate}
            imgName={item.image_name}
            category={item.category_id}
            sizes={props.hasSizes}
          />
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
