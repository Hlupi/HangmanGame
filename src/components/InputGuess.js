import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { makeGuess } from '../actions/game'
import { gameFinished } from '../lib/game'
import { Button } from '../fragments/button'

const Error = styled.span`
  width: 100%;
  text-align: left;
  opacity: ${({visible}) => visible ? 1 : 0};
  transition: opacity 0.25s linear;
  color: rgb(190,22,49);
`

class InputGuess extends PureComponent {
  state = {
    error: false
  }

  handleSubmit = event => {
    event.preventDefault()
    const [ input ] = event.target.children
    if(this.props.letters.indexOf(input.value) > -1) {
      console.log('input', this.props.letters.indexOf(input.value))
      this.setState({error: true})
    } else {
      this.props.makeGuess(input.value)
      this.setState({error: false})
      input.value = ''
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input maxLength='1' type='text' pattern="^[A-Za-z]+$" title="Input the letter you whish to guess" />
        <Button type='submit' value='submit' disabled={gameFinished(this.props.word, this.props.letters)} purple>
          GUESS
        </Button>
        <Error visible={this.state.error}>Oops, looks like you've already guessed this letter</Error>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    word: state.word,
    letters: state.letters
  }
}

export default connect(mapStateToProps, { makeGuess })(InputGuess)
