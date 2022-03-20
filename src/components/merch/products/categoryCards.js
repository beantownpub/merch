import React from 'react'
import { CategoryCard } from './category'
import { StyledContentContainer } from '../styles/index'

export const CategoryCards = (props) => {
  const categoryList = []
  if (props.categories) {
    let cnt = 1
    for (const category of Object.values(props.categories)) {
      categoryList.push(
        <CategoryCard
          description={category['description']}
          name={category['name']}
          isActive={category['is_active']}
          items={category['products']}
          key={category['id']}
          location={category['location']}
          sku={category['id']}
          slug={category['slug']}
          orderNumber={category['order_number'] || cnt}
          cartUpdate={props.cartUpdate}
          hasSizes={category['has_sizes']}
        />
      )
      cnt++
    }
  }
  return (
    <StyledContentContainer aria-labelledby="MerchDash products container" backgroundColor="beige" margin="auto">
      {categoryList}
    </StyledContentContainer>
  )
}
