import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { showGuess } from '../lib/game'

const P = styled.p`
  color: rgb(247, 191, 162);
  font-size: 30px;
  margin-bottom: 30px;
  text-transform: uppercase;
`


const WordToGuess = ({ secretWord }) => {
    return (
        <P>{secretWord}</P>
    )
}

const mapStateToProps = state => {
    return {
        secretWord: showGuess(state.word, state.letters)
    }
}

export default connect(mapStateToProps)(WordToGuess)
