import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  padding: 10px 20px;
  box-shadow: 0px 4px 10px rgb(190, 22, 49);
  font-size: 18px;
  background: rgb(246, 199, 176);
  color: rgb(190, 22, 49);
  border-radius: 3px;
  font-family: 'Sanchez', serif;
  @media (max-width: 767px) {
    margin-bottom: 15px;
  }
`

const H1 = styled.h1`
  color: #efefef;
  text-shadow: 0px 3px 3px rgb(190, 22, 49);
  color: rgb(238, 107, 64);
  font-size: 28px;
  @media (min-width: 768px) {
    font-size: 32px;
  }
`

const Header = ({ gamePage, onClick }) => {
  const buttontext = gamePage ? 'Back' : 'Play'
  return (
    <header>
      <Button onClick={onClick}>{buttontext}</Button>
      <H1>How's it hanging man?</H1>
    </header>
  )
}

export default Header
