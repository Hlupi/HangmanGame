import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import { newGame } from '../actions/game'
class NewGameButton extends PureComponent {

  render() {
    return (
      <button onClick={this.props.newGame}>New Game
      </button>)
  }
}

const mapStateToProps = (state) => {
  return {
    game: state
  }
}

export default connect(mapStateToProps, { newGame })(NewGameButton)
