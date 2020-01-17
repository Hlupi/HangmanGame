import React, { PureComponent } from 'react'
import styled from 'styled-components'

const H2 = styled.h2`
  width: ${({ short }) => short? '50%' : '100%'};
  transform: translateX(${({ short }) => short ? '100%' : '0%'});
  color: rgb(247, 191, 162);

`

class Title extends PureComponent {
  render() {
    return(
      <H2 short={this.props.short}>{ this.props.content }</H2>
    )
  }
}

export default Title
