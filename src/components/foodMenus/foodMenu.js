import React, { useState, useEffect } from 'react'
import { PageContainer } from "../content/container.js"
import { FoodMenu } from "@jalgraves/react-components-library"
import { config, getOptions } from '../../utils/main.js'
const COLORS = config.colors
const FONTS = config.fonts

const BeantownMenu = () => {
  const [state, setState] = useState({
    categories: [],
    sides: []
  })
  useEffect(() => {
    fetch(`/menu/categories`, getOptions)
      .then(response => response.json())
      .then(data => setState({ categories: data.data['categories'], sides: data.data['sides'] }))
      .catch(error => console.log(error))
  }, [])

  return (
    <PageContainer
      ariaDetails="MenuPageContainer"
      margin="auto"
      background="beige"
    >
      {state.categories ?
        <FoodMenu 
          categories={state.categories} 
          menuBackground="beige"
          menuMargin="auto"
          menuPadding="10% 0"
          menuDisplay="flex"
          menuCategoryContainerDisplay="flex"
          menuCategoryContainerFlexFlow="column wrap"
          menuCategoryItemsContainerMargin="auto"
          menuCategoryItemsContainerJustifyContent="center"
          menuCategoryDescriptionColor={COLORS.black}
          menuCategoryDescriptionFontFamily={FONTS.content}
          menuCategoryDescriptionFontSize="1.5rem"
          menuCategoryDescriptionFontWeight="900"
          menuCategoryDescriptionLetterSpacing="unset"
          menuCategoryDescriptionLineHeight="150%"
          menuCategoryDescriptionMargin="auto"
          menuCategoryDescriptionMaxWidth="60%"
          menuCategoryDescriptionPadding="1rem 0"
          menuCategoryDescriptionTextAlign="center"
          menuCategoryDescriptionTextTransform="none"
          menuCategoryTitleFontFamily={FONTS.title}
          menuCategoryTitleLetterSpacing=".25rem"
          menuCategoryTitleMargin="auto"
          menuCategoryTitlePadding="2rem 0"
          menuCategoryTitleTextAlign="center"
          menuCategoryTitleTextTransform="uppercase"
          menuItemNameLineHeight="125%"
          sides={state.sides}
          sideItemBorderRadius="5px"
          sideItemFontFamily={FONTS.content}
          sideItemFontSize="1.5rem"
          sideItemFontWeight="900"
          sideItemPadding="1rem"
          sideItemWidth="max-content"
          sideItemMargin="1rem"
          menuWarningFontFamily={FONTS.content}
          menuWarningLineHeight="150%"
          menuWarningMaxWidth="60%"
        /> :
        <h1>Error Loading Menu</h1>
      }
    </PageContainer>
  )
}

export default BeantownMenu
