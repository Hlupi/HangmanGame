import { createGlobalStyle, css } from 'styled-components'

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
    min-width: 320px;
    overflow-x: hidden;
    position: relative;
    font-family: 'Noto Sans', sans-serif;
    color: rgb(246, 199, 176);
    min-height: 100vh;
    background-color: rgb(246,199,176);
    transition: background-size 0.25s linear;
    background-position-x: right;
    ${({ gamePage }) => gamePage ? css`
      @media(min-width: 768px) {
        padding: 20px;
        background-size: 50%;;
        background-image: linear-gradient(rgb(62, 3, 36), rgb(34,15,34));
        background-repeat: no-repeat;
      }
    ` : css`
      padding: 20px;
      background-size: 100%;
      background-image: linear-gradient(rgb(62, 3, 36), rgb(34,15,34));
      background-repeat: no-repeat;
    `};
  }

  * {
    box-sizing: border-box;
  }
  *:before, *:after {
    box-sizing: inherit;
  }

  header {
    ${({ gamePage }) => gamePage && css`
      @media(max-width: 767px) {
        padding: 20px
      }
    `}
  }

  li {
    list-style-type: none;
  }

  a {
    color: rgb(190, 22, 49);
    text-transform: uppercase;
    font-size: 18px;
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    text-shadow: 1px 1px 3px rgb(238, 107, 64);
    letter-spacing: 3px;
    word-spacing: 7px;
    cursor: pointer;
    text-decoration: none;
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

  h1 {
    font-family: 'Sanchez', serif;
    color: #efefef;
    text-shadow: 0px 3px 3px rgb(190, 22, 49);
    color: rgb(238, 107, 64);
    font-size: 28px;
    @media (min-width: 768px) {
      font-size: 32px;
    }
  }

  h2 {
    color: rgb(247, 191, 162);
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 20px;
    text-align: center;
    font-weight: bold;
  }

  form {
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
     max-width: 450px;
    @media(min-width: 768px) {
      padding: 0 40px;
       margin-bottom: 30px;
    }
  }

  fieldset {
    margin: 0;
    padding: 0;
    border: none;
  }

   input {
    padding: 10px 20px;
    background: rgb(246, 199, 176);
    font-size: 20px;
    text-transform: uppercase;
    color: rgb(34, 15, 34);
    border: none;
    border-radius: 5px;
    width: calc(100% - 140px);
    max-width: 300px;
  }

  ul, ol {
    margin: 0;
    padding: 0;
  }

`
