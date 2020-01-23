import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const Text = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 20px;
  @media(min-width: 768px) {
    font-size: 26px;
    margin-bottom: 30px;
  }  
`


const ShowLetters = ({ guesses }) => {
  return (
    <Text>
      You have guessed the letters:
      {guesses.map((letter, index) => (
        <span key={index}> {letter} /</span>
      ))}
    </Text>
  )
}

const mapStateToProps = state => {
  return {
    guesses: state.letters
  }
}

export default connect(mapStateToProps, {})(ShowLetters)
