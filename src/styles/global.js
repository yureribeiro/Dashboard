import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    max-width: 100vw;
    max-height: 100vh;
    background-color: #222831;
    font-family: Arial, Helvetica;
  }
`

export default GlobalStyle

