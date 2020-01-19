import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { newGame } from '../actions/game'

const Button = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  background: rgb(246, 199, 176);
  color: rgb(190, 22, 49);
  border-radius: 3px;
  font-family: 'Sanchez', serif;
  text-transform: uppercase;
  @media (max-width: 767px) {
    margin-bottom: 15px;
  }

  &:hover {
    box-shadow: 0px 4px 10px rgb(190, 22, 49);
  }
`

class NewGameButton extends PureComponent {
  render() {
    return (
      <Button onClick={this.props.newGame} className='newGame'>
        Start a new game
      </Button>
    )
  }
}

export default connect(null, { newGame })(NewGameButton)
