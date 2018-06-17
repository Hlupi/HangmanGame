import React, {PureComponent} from 'react'
import { newGame, makeGuess } from '../actions/game'
import { connect } from 'react-redux'
import Title from './Title'
import NewGameButton from './NewGameButton'
import InputGuess from './InputGuess'



class GameContainer extends PureComponent {


  componentDidMount(){
    this.props.newGame()
  }



  render() {
    return (
      <div>
        <Title content="I am the game" />
        <InputGuess />
        <NewGameButton />


      </div>);
  }
}

const mapStateToProps = (store) => {
  return {
    game: store.game
  }
}

export default connect(mapStateToProps, { newGame, makeGuess })(GameContainer)
