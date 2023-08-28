import React from 'react'
import { StyledContentContainer } from './styles.js'

const ErrorPage = () => {
  return (
    <StyledContentContainer aria-labelledby="Error page container">
      <h1>See Yah Laatah!&trade;</h1>
      <h2>Sorry, somethin' aint right</h2>
      <h2>Requested page is nowhere to be found on the server</h2>
    </StyledContentContainer>
  )
}

export { ErrorPage }
