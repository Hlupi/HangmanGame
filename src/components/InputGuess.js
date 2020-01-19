import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { makeGuess } from '../actions/game'
import { gameFinished } from '../lib/game'

const Form = styled.form`
  margin-bottom: 30px;
`

const Input = styled.input`
  padding: 10px 20px;
  margin-right: 20px;
  background: rgb(246, 199, 176);
  border: none;
  border-radius: 5px;
  color: rgb(34, 15, 34);
  font-size: 20px;
  text-transform: uppercase;
`

const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background: rgb(34, 15, 34);
  color: rgb(246, 199, 176);
  border-radius: 3px;
  font-family: 'Sanchez', serif;
  @media (max-width: 767px) {
    margin-bottom: 15px;
  }

  &:hover {
    box-shadow: 0px 1px 10px rgb(190, 22, 49);
  }
`

class InputGuess extends PureComponent {
  handleSubmit = event => {
    event.preventDefault()
    const [input] = event.target.children
    if (input.value !== '' && input.value !== ' ') {
      this.props.makeGuess(input.value)
      input.value = ''
    }
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Input maxLength='1' type='text' />
          <Button type='submit' value='submit' disabled={gameFinished(this.props.word, this.props.letters)}>
            GUESS
          </Button>
        </Form>
      </div>
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
