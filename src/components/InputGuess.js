import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { makeGuess } from '../actions/game'
import { gameFinished } from '../lib/game'

const Input = styled.input`
  padding: 10px 20px;
  background: rgb(246, 199, 176);
  border: none;
  border-radius: 5px;
  color: rgb(34,15,34);
`




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
          <Input maxLength='1' type='text'/>
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
