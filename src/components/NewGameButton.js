import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { newGame } from '../actions/game'
import { Button } from '../fragments/button'

class NewGameButton extends PureComponent {
  render() {
    return (
      <Button onClick={this.props.newGame} className='newGame'>
        Start a new game
      </Button>
    )
  }
}

export default connect(null, { newGame })(NewGameButton)
