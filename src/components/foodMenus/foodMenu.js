import React, { useState, useEffect } from "react"
import { PageContainer, ContentContainer } from "../containers/index.js"
import { FoodMenu } from "@jalgraves/react-components-library"
import { config, getOptions } from "../../utils/main.js"
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
      .then(data => setState({ categories: data.data["categories"], sides: data.data["sides"] }))
      .catch(error => console.log(error))
  }, [])

  return (
    <PageContainer
      ariaDetails="MenuPageContainer"
      margin="auto"
      background="beige"
      padding="5% 0"
    >
      {state.categories ?
        <FoodMenu 
          categories={state.categories} 
          menuBackground="beige"
          menuMargin="auto"
          menuPadding="5% 0"
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
        /> :
        <h1>Error Loading Menu</h1>
      }
      <ContentContainer
        backgroundColor="inherit"
        h3Color={COLORS.black}
        h3FontFamily={FONTS.content}
        h3FontSize="1.75rem"
        h3FontWeight="bold"
        h3LetterSpacing="unset"
        h3LineHeight="150%"
        h3Margin="auto"
        h3Padding="1rem 0"
        h3TextAlign="center"
        h3TextTransform="none"
        margin="1rem auto"
        maxWidth="500px"
        padding="0"
      >
        <h3><span style={{color: COLORS.red}}>*</span>These items are cooked to order. There is a risk associated with consuming undercooked meat products</h3>
        <h3>Prices subject to change without notice</h3>
      </ContentContainer>
    </PageContainer>
  )
}

export default BeantownMenu
