import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import { wrongGuessCount } from '../lib/game'

class WrongGuesses extends PureComponent {

  render() {


    return (
      <div>
        <h2>You guessed wrong: <span> {wrongGuessCount(this.props.word, this.props.letters)} / 6</span>
        </h2>
      </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    word: state.word,
    letters: state.letters
  }
}

export default connect(mapStateToProps)(WrongGuesses)
