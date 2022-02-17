import React from 'react'
import { StyledMerchSection } from './styles'
import { ProductCard } from './product'

export const CategoryCard = (props) => {
    const renderItems = () => {
        let items = ''
        if (props.items) {
            items = props.items.map((item) =>
                <ProductCard
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
        return (
            <div className="sectionItems" aria-labelledby="Category card items Container">
                {items}
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
                {renderItems()}
        </StyledMerchSection>
    )
}
