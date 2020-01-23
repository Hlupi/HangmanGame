import React from 'react'
import { connect } from 'react-redux'

import { newGame } from '../actions/game'
import { Button } from '../fragments/button'


function NewGameButton({ newGame, purple }) {
  return (
    <Button onClick={newGame} className='newGame' purple={purple}>
      Start a new game
    </Button>
  )
}

export default connect(null, { newGame })(NewGameButton)
