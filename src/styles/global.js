import { createGlobalStyle } from "styled-components"
import background from '../images/background-black-desktop.jpg'


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    font-family: Arial, Helvetica;
  }
`

export default GlobalStyle

