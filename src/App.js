import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Intro from './components/Intro'
import GameContainer from './components/GameContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">How's it hanging, man?</h1>
        </header>

        <main>
          <Route exact path='/' component={Intro} />
          <Route path='/hangman' component={GameContainer} />
        </main>

      </div>
    );
  }
}

export default App;
