import React, { PureComponent } from 'react'
import { showGuess, isWinner, gameFinished } from '../lib/game'
import { newGame, makeGuess } from '../actions/game'
import { connect } from 'react-redux'
import Title from './Title'
import NewGameButton from './NewGameButton'
import InputGuess from './InputGuess'
import ShowLetters from './ShowLetters'
import WrongGuesses from './WrongGuesses'



class GameContainer extends PureComponent {

  render() {

    return (
      <div>
        <NewGameButton />
        <Title content="Guess this word:" />
        <p>{showGuess(this.props.word, this.props.letters)}</p>
        <InputGuess />
        <ShowLetters />
        <WrongGuesses />
        {isWinner(this.props.word, this.props.letters) && <p>YOU HAVE WON!</p>}
        {gameFinished(this.props.word, this.props.letters) && !isWinner(this.props.word, this.props.letters) && <p>YOU LOST ): </p>}


      </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    word: state.word,
    letters: state.letters
  }
}

export default connect(mapStateToProps, { newGame, makeGuess })(GameContainer)
