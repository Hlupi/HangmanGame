import React from 'react'

import { Button } from '../fragments/button'


const Header = ({ gamePage, onClick }) => {
  const buttontext = gamePage ? 'Back' : 'Play'
  return (
    <header>
      <Button onClick={onClick} nav>{buttontext}</Button>
      <h1>How's it hanging man?</h1>
    </header>
  )
}

export default Header
