import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { makeGuess } from '../actions/game'


class InputGuess extends PureComponent {

  handleSubmit = (event) => {
    this.props.makeGuess()
  }

  render() {
    return (
      <div>
        <h2>{this.props.showGuess}</h2>
        <input maxLength='1' type='text' defaultValue={this.props.guess}/>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>)
  }
}

const mapStateToProps = ( {guess, word}) => {
  return {
    guess,
    word
  }
}

export default connect (mapStateToProps, {makeGuess})(InputGuess)
