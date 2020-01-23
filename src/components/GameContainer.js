import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components'

import { gameFinished } from '../lib/game'
import Title from './Title'
import WordToGuess from './WordToGuess'
import NewGameButton from './NewGameButton'
import InputGuess from './InputGuess'
import ShowLetters from './ShowLetters'
import WrongGuesses from './WrongGuesses'
import Hangman from './Hangman'
import GameMessage from './GameMessage'

const FlexContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`

const Container = styled.div`
  padding: 20px 40px;
  width: 100%;
  text-align: center;
  @media (min-width: 768px) {
    padding: 0 60px;
    width: 50%;
    ${({ withBackground }) => !withBackground && 'max-width: 550px'};
  }
  @media (max-width: 767px) {
    ${({ withBackground }) => withBackground ? css`
      background-image: linear-gradient(rgb(62, 3, 36), rgb(34, 15, 34));
    ` :
    'max-width: 450px'
    }
  }
`


class GameContainer extends PureComponent {
  state = {
    showMessage : true
  }

  closeModal = () => {
    this.setState({ showMessage: false})
  }

  render() {
    const { showMessage } = this.state
    const { gameOver } = this.props

    return (
      <FlexContainer>
        <Container>
          <Hangman />
        </Container>
        <Container withBackground>
          <Title content='Guess this word:' />
          <WordToGuess />
          <InputGuess />
          <ShowLetters />
          <WrongGuesses />
          {gameOver && showMessage && <GameMessage onClick={this.closeModal} /> }
          <NewGameButton />
        </Container>
      </FlexContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    gameOver: gameFinished(state.word, state.letters)
  }
}

export default connect(mapStateToProps)(GameContainer)
