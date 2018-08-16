import React, { PureComponent } from 'react'
import { makeGuess } from '../actions/game'
import { connect } from 'react-redux'


class InputGuess extends PureComponent {

  handleSubmit = (event) => {
    event.preventDefault()
    const [input] = event.target.children
    this.props.makeGuess(input.value)
    input.value= ''
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text'/>
          <button type='submit' value='submit'>submit</button>
        </form>
      </div>
    )
  }
}

// handleSubmit = (event) => {
//   this.props.makeGuess()
// }
//
// render() {
//   return (
//     <div>
//       <h2>{this.props.showGuess}</h2>
//       <input maxLength='1' type='text' defaultValue={this.props.guess}/>
//       <button onClick={this.handleSubmit}>Submit</button>
//     </div>)
// }
// }


export default connect (null, { makeGuess })(InputGuess)
