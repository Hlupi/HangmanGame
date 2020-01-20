import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { wrongGuessCount } from '../lib/game'

const Text = styled.p`
  font-size: 26px;
  text-transform: uppercase;
  margin-bottom: 30px;
`

const Guesses = styled.span`
  text-shadow: 0px 3px 3px rgb(190,22,49);
`

class WrongGuesses extends PureComponent {
  render() {
    return (
      <>
        <Text>
          Wrong guess count: <Guesses> {wrongGuessCount(this.props.word, this.props.letters)} / 6</Guesses>
        </Text>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    word: state.word,
    letters: state.letters
  }
}

export default connect(mapStateToProps)(WrongGuesses)
