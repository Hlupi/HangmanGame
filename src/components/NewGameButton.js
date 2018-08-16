import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { newGame } from '../actions/game'

class NewGameButton extends PureComponent {

  render() {
    return (
      <button onClick={this.props.newGame}>New Game
      </button>)
  }
}


export default connect(null, { newGame })(NewGameButton)
