import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components'

import { showGuess, isWinner, gameFinished } from '../lib/game'
import { newGame, makeGuess } from '../actions/game'
import Title from './Title'
import NewGameButton from './NewGameButton'
import InputGuess from './InputGuess'
import ShowLetters from './ShowLetters'
import WrongGuesses from './WrongGuesses'
import Hangman from './Hangman'

const FlexContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`

const Container = styled.div`
  padding: 20px 40px;
  width: 100%;
  text-align: center;
  @media (min-width: 768px) {
    padding: 20px;
    width: 50%;
  }
  ${({ withBackground }) => withBackground && css`
  @media(max-width: 767px) {
    background-image: linear-gradient(rgb(62, 3, 36), rgb(34,15,34));
  }
  `}
`

const P = styled.p`
  color: rgb(247, 191, 162);
  font-size: 30px;
  margin-bottom: 30px;
  text-transform: uppercase;
`

class GameContainer extends PureComponent {
  render() {
    return (
      <FlexContainer>
        <Container>
          <Hangman visible={this.props.letters.length > 0} />
        </Container>
        <Container withBackground>
          <Title content='Guess this word:' />
          <P>{showGuess(this.props.word, this.props.letters)}</P>
          <InputGuess />
          <ShowLetters />
          <WrongGuesses />
          {isWinner(this.props.word, this.props.letters) && <p>YOU HAVE WON!</p>}
          {gameFinished(this.props.word, this.props.letters) && !isWinner(this.props.word, this.props.letters) && <p>YOU LOST ): </p>}
          <NewGameButton />
        </Container>
      </FlexContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    word: state.word,
    letters: state.letters
  }
}

export default connect(mapStateToProps, { newGame, makeGuess })(GameContainer)
