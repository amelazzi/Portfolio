import { createGlobalStyle } from 'styled-components'
import { dark } from './colors'


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');

  @font-face {
    font-family: "Josefin";
    src: url("./fonts/josefin.woff") format("woff"),
    src: url("./fonts/josefin.woff2") format("woff2"),
  }

  body {
    font-family: 'Josefin', Arial, sans-serif !important;
    background: ${dark} !important;
    margin: 0;
    padding: 0;
    background: white;
  }

`;

export default GlobalStyle;