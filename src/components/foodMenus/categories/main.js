import React from 'react'
import { CategoryCard } from './card.js'
import { StyledContentContainer, StyledMenuWarning } from '../styles/main.js'
import { Sides } from '../sides/main.js'


export const CategoryCards = (props) => {
  const categories = props.categories
  const categoryList = []
  if (categories) {
    let cnt = 1
    for (const category of Object.values(categories)) {
      categoryList.push(
        <CategoryCard
          description={category['description']}
          name={category['name']}
          isActive={category['is_active']}
          items={category['items']}
          key={category['id']}
          location={category['location']}
          sku={category['id']}
          slug={category['slug']}
          orderNumber={category['order_number'] || cnt}
        />
      )
      cnt++
    }
  }
  return (
    <StyledContentContainer aria-labelledby="FoodDash content container" backgroundColor="beige" margin="5rem auto 1rem auto">
      {categoryList}
      <Sides sides={props.sides} />
      <StyledMenuWarning aria-labelledby="Menu warning">
        <h3><span>*</span>These items are cooked to order. There is a risk associated with consuming undercooked meat products</h3>
        <h3>Prices subject to change without notice</h3>
      </StyledMenuWarning>
    </StyledContentContainer>
  )
}
