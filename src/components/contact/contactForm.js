import React from "react"
import { ContactForm, Icon } from "@jalgraves/react-components-library"
import { ContentContainer } from "../content/container.js"
import { config } from "../../utils/main.js"
const COLORS = config.colors
const FONTS = config.fonts

const ContactBeantown = () => {
  return (
    <ContentContainer 
      backgroundColor={COLORS.backgroundGray}
      borderRadius="5px"
      h2Color={COLORS.white}
      h2FontFamily={FONTS.headline}
      h2FontWeight="bold"
      h2LetterSpacing=".25rem"
      h2TextTransform="uppercase"
      margin="1rem auto"
      padding="1%"
    >
      <h2>
        <Icon
          style={{fontSize: "1.75rem", margin: "auto"}}
          iconName={"faEnvelope"}
        /> Request Info
      </h2>
      <ContactForm
        contactReply="&#9733; Request Received! We will respond to you as soon as we can. Thanks!"
        display="flex"
        flexFlow="column wrap"
        fontFamily={FONTS.headline}
        invalidEmailError="&#9757; Invalid email address"
        invalidPhoneError="&#9757; Invalid phone number"
        buttonColor={COLORS.red}
        buttonFontColor={COLORS.white}
        buttonFontWeight="bold"
        buttonLetterSpacing=".3rem"
        labelFontColor={COLORS.white}
        labelFontWeight="bold"
        labelLetterSpacing=".3rem"
        pFontColor={COLORS.red}
        pFontFamily={FONTS.headline}
        pLetterSpacing=".2rem"
        pFontWeight="900"
        pTextTransform="uppercase"
        requiredFieldError="&#9757; This field is required"
        width="100%"
      />
    </ContentContainer>
  )
}

export default ContactBeantown
