import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { wrongGuessCount } from '../lib/game'

const Text = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 20px;
  @media(min-width: 768px) {
    font-size: 26px;
    margin-bottom: 30px;
  } 
`

const Guesses = styled.span`
  text-shadow: 0px 3px 3px rgb(190, 22, 49);
`


const WrongGuesses = ({ count }) => {
  return (
    <Text>
      Wrong guess count: <Guesses> {count} / 6</Guesses>
    </Text>
  )
}

const mapStateToProps = state => {
  return {
    count: wrongGuessCount(state.word, state.letters)
  }
}

export default connect(mapStateToProps)(WrongGuesses)
