import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Text = styled.p`
  font-size: 26px;
  text-transform: uppercase;
  margin-bottom: 30px;
`

class ShowLetters extends PureComponent {
  render() {
    return (
      <>
        <Text>
          You have guessed the letters:
          {this.props.letters.map((letter, index) => (
            <span key={index}> {letter} /</span>
          ))}
        </Text>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    letters: state.letters
  }
}

export default connect(mapStateToProps, {})(ShowLetters)
