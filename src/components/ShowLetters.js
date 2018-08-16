import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class ShowLetters extends PureComponent {
  render() {
    return (
      <div>
        <h3>You have guessed: {this.props.letters.map((letter, index) => <span key={index}>{letter} / </span>)}</h3>
      </div>);
  }
}

const mapStateToProps = (state) => {
  return {
    letters: state.letters
  }
}

export default connect(mapStateToProps, { })(ShowLetters)
