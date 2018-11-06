import React, { PureComponent } from 'react'
import { makeGuess } from '../actions/game'
import { connect } from 'react-redux'
import { gameFinished } from '../lib/game'


class InputGuess extends PureComponent {

  handleSubmit = (event) => {
    event.preventDefault()
    const [input] = event.target.children
    if(input.value !== '' && input.value !== ' ') {
      this.props.makeGuess(input.value)
      input.value= ''
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input maxLength='1' type='text'/>
          <button type='submit' value='submit' disabled={gameFinished(this.props.word, this.props.letters)}>GUESS</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    word: state.word,
    letters: state.letters
  }
}

export default connect (mapStateToProps, { makeGuess })(InputGuess)
