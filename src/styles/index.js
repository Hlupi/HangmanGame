import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body,
  html {
    text-rendering: optimizeLegibility;
    -ms-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0 auto;
    padding: 20px;
    min-width: 320px;
    overflow-x: hidden;
    font-family: 'Titillium Web', sans-serif;
    min-height: 100vh;
    /* background: rgb(34,15,34); */
    background-size: ${({ gamePage }) => gamePage ? '50%' : '100%'};
    background-position-x: right;
    background-image: linear-gradient(rgb(62, 3, 36), rgb(34,15,34));
    background-repeat: no-repeat;
    /* background-image: linear-gradient(#63224c, #3C152E); */
    transition: background-size 0.25s linear;
  }
  * {
    box-sizing: border-box;
  }
  *:before, *:after {
    box-sizing: inherit;
  }

  li {
    list-style-type: none;
  }

  a {
    cursor: pointer;
  }

  button {
    cursor: pointer;
    border: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  span,
  strong {
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Sulphur Point', sans-serif;
    margin-bottom: 20px;
    text-align: center;
    font-weight: bold;
  }

  fieldset {
    margin: 0;
    padding: 0;
    border: none;
  }

   input {
    margin: 0;
  }

  ul, ol {
    margin: 0;
    padding: 0;
  }

`


const colors = {
  purple: 'rgb(34,15,34)',
  dred: 'rgb(62, 3, 36)',
  red: 'rgb(111,10,41)',
  lred: 'rgb(190,22,49)',
  orange: 'rgb(238,107,64)',
  salmon: 'rgb(254, 163, 135)',
  beige: 'rgb(247, 191, 162)',
  lbeige: 'rgb(246, 199, 176)',
  svgdred: 'rgb(157, 18, 40)'
}
