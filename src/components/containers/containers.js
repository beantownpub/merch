import React from "react"
import { config } from "../../utils/main.js"
import { ContentSection } from "@jalgraves/react-components-library"
const COLORS = config.colors
const FONTS = config.fonts

export const PageContainer = (props) => {
  return (
    <ContentSection 
      ariaDetails={props.ariaDetails || "PageContainer"}
      backgroundColor={props.background}
      display="flex" 
      flexFlow="column wrap"
      margin={props.margin}
      padding={props.padding}
    >
      {props.children}
    </ContentSection>
  )
}
export const ContentContainer = (props) => {
  return (
    <ContentSection
      ariaDetails={props.ariaDetails}
      aColor={props.aColor}
      aFontFamily={FONTS.headline}
      aFontSize="1.75rem"
      aFontWeight="600"
      aHoverColor={props.aHoverColor}
      articleColor={COLORS.black}
      articleFontSize="150%"
      articleFontWeight="bold"
      articleLineHeight="150%"
      articleMargin={props.articleMargin || "auto"}
      articleMaxWidth="85vw"
      articlePadding="2rem"
      backgroundColor={props.backgroundColor || COLORS.yellow}
      borderRadius={props.borderRadius}
      borderTop={props.borderTop}
      display="flex"
      flexFlow="column wrap"
      fontColor={props.fontColor || COLORS.white}
      fontFamily={props.fontFamily || FONTS.content}

      h1Color={props.h1Color || COLORS.black}
      h1FontFamily={props.h1FontFamily || FONTS.headline}
      h1FontSize={props.h1 || "2.75rem"}
      h1FontWeight={props.h1FontWeight || "900"}
      h1LetterSpacing={props.h1LetterSpacing}
      h1LineHeight={props.h1LineHeight || "150%"}
      h1Margin={props.h1Margin || "auto"}
      h1Padding={props.h1Padding}
      h1TextAlign={props.h1TextAlign}
      h1TextTransform={props.h1TextTransform || "uppercase"}

      h2Color={props.h2Color || COLORS.black}
      h2FontFamily={props.h2FontFamily || FONTS.content}
      h2FontSize={props.h2FontSize || "2rem"}
      h2FontWeight={props.h2FontWeight}
      h2LetterSpacing={props.h2LetterSpacing}
      h2LineHeight="150%"
      h2Margin={props.h2Margin || "auto"}
      h2Padding={props.h2Padding}
      h2TextAlign={props.h2TextAlign}
      h2TextTransform={props.h2TextTransform}

      h3Color={props.h3Color || COLORS.dodgerBlue}
      h3FontFamily={props.h3FontFamily || FONTS.headline}
      h3FontSize="1.75rem"
      h3FontWeight="bold"
      h3LetterSpacing={props.h3LetterSpacing || ".3rem"}
      h3LineHeight="150%"
      h3Margin={props.h3Margin || "auto"}
      h3Padding={props.h3Padding}
      h3TextAlign={props.h3TextAlign}
      h3TextTransform={props.h3TextTransform || "uppercase"}

      h4Color={props.h4Color}
      h4FontFamily={props.h4FontFamily || FONTS.content}
      h4FontSize={props.h4FontSize || "1.25rem"}
      h4FontWeight={props.h4FontWeight}
      h4LineHeight="175%"
      h4Margin={props.h4Margin}
      h4Padding={props.h4Padding || ".5rem 0"}
      h4TextAlign={props.h4TextAlign}

      h5Color={props.h5Color}
      h5FontFamily={props.h5FontFamily || FONTS.headline}
      h5FontSize={props.h5FontSize || "2rem"}
      h5FontWeight={props.h5FontWeight || "bold"}
      h5LetterSpacing={props.h5LetterSpacing}
      h5LineHeight={props.h5LineHeight || "150%"}
      h5Padding={props.h5Padding}
      h5TextAlign={props.h5TextAlign}
      h5TextTransform={props.h5TextTransform || "uppercase"}

      h6Color={props.h6Color}

      lineHeight={props.lineHeight || "150%" }
      margin={props.margin || "15% auto 5% auto"}
      maxWidth={props.maxWidth}
      padding={props.padding || "5%"}
      pColor={props.pColor || COLORS.black}
      pFontSize="150%"
      pLineHeight="150%"
      pMaxWidth="900px"
      pPadding=".5rem 0"
      width={props.width || "100%"}
    >
      {props.children}
    </ContentSection>
  )
}
