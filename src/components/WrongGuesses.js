import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { wrongGuessCount } from '../lib/game'

const Text = styled.p`
  color: rgb(246, 199, 176);
  font-size: 26px;
  text-transform: uppercase;
  margin-bottom: 30px;
`

class WrongGuesses extends PureComponent {
  render() {
    return (
      <>
        <Text>
          Wrong guess count: <span> {wrongGuessCount(this.props.word, this.props.letters)} / 6</span>
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
