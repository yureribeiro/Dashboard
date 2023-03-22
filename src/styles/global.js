import { createGlobalStyle } from "styled-components"



const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: #2B2B28;
    background-size: cover;
    background-repeat: no-repeat;
    font-family: Arial, Helvetica;
  }
`

export default GlobalStyle

