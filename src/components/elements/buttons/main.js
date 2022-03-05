import React from 'react'
import { StyledButton } from './styles'
import MenuIcon, { getIcon } from '../icons/main'
import { config } from '../../../utils/main'

const COLORS = config.colors

export const Button = (props) => {
    const iconStyle = {
        margin: 'auto .5rem',
        color: props.iconColor || COLORS.yellow,
        fontSize: props.iconSize || '1rem'
    }
    return (
        <StyledButton
            aria-labelledby={props.ariaLabel || "Button component"}
            backgroundColor={props.buttonStyles.bgColor}
            border={props.buttonStyles.border}
            borderRadius={props.buttonStyles.borderRadius}
            fontFamily={props.buttonStyles.fontFamily}
            fontSize={props.buttonStyles.fontSize}
            hoverBackgroundColor={props.buttonStyles.hoverBackgroundColor}
            hoverBorder={props.buttonStyles.hoverBorder}
            hoverTextColor={props.buttonStyles.hoverTextColor}
            letterSpacing={props.buttonStyles.letterSpacing}
            margin={props.buttonStyles.margin}
            maxWidth={props.buttonStyles.maxWidth}
            outerMargin={props.buttonStyles.outerMargin}
            outerPadding={props.buttonStyles.outerPadding}
            padding={props.buttonStyles.padding}
            position={props.buttonStyles.position}
            textColor={props.buttonStyles.textColor}
            textAlign={props.buttonStyles.textAlign}
            textDecoration={props.buttonStyles.textDecoration}
            textTransform={props.buttonStyles.textTransform}
            width={props.buttonStyles.width}
        >
            <button onClick={props.clickHandler}>
            {props.icon &&
                <MenuIcon style={iconStyle} name={getIcon(props.icon)} />}{props.buttonText}</button>
        </StyledButton>
    )
}

export const ToggleButton = (props) => {
    const handleClick = () => {
        props.runFunction()
    }
    return (
        <Button
            clickHandler={handleClick}
            buttonStyles={props}
            buttonText={props.buttonText}
            icon={props.icon}
            iconColor={props.iconColor}
        />
    )
}

export const CartButton = (props) => {
  const handleClick = () => {
      if (props.runFunction) {
          props.runFunction(props.sku, props.quantity, props.size, props.action)
      }
  }
  return (
    <Button
      clickHandler={handleClick}
      buttonStyles={props}
      buttonText={props.buttonText}
    />
  )
}

export const SubmitButton = (props) => {
  const handleClick = () => {
      if (props.runFunction) {
        props.runFunction()
      }
  }
  return (
    <Button
      clickHandler={handleClick}
      buttonStyles={props}
      buttonText={props.buttonText}
    />
  )
}

export const LinkButton = (props) => {
    const handleClick = () => {
        window.location.href = props.url
    }
    return (
        <Button
            clickHandler={handleClick}
            buttonStyles={props}
            buttonText={props.buttonText}
        />
    )
}
