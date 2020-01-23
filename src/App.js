import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { withRouter } from "react-router";
import { connect } from 'react-redux'

import GlobalStyles from './styles/index'
import Header from './components/Header'
import Intro from './components/Intro'
import GameContainer from './components/GameContainer'
import { newGame } from './actions/game'

class App extends Component {
  switchPath = () => {
    if(this.props.location.pathname.includes('hangman')) {
      this.props.history.push('/')
    } else {
      this.props.history.push('/hangman')
      this.props.newGame()
    }
  }

  render() {
    const { location } = this.props
    const gamePage = location.pathname.includes('hangman')

    return (
      <>
        <GlobalStyles gamePage={gamePage} />
        <div>
          <Header gamePage={gamePage} onClick={this.switchPath} />
          <main>
            <Route exact path='/' component={Intro} />
            <Route path='/hangman' component={GameContainer} />
          </main>
        </div>
      </>
    );
  }
}

export default withRouter(connect(null, { newGame })(App));
