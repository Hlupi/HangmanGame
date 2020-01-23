import React, { useState, useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import styled, { css, keyframes } from 'styled-components'

import { wrongGuessCount, isWinner, gameFinished } from '../lib/game'

const drawPath = length => keyframes`
from {
  stroke-dasharray: 0 ${length};
}
  to {
    stroke-dasharray: ${length} 0;
}`

const Human = styled.g`
  transition: transform 1s cubic-bezier(0.1, -0.6, 0.2, 0) 1s;
`

const Head = styled.circle`
 transition: transform 1s ease 1s;
`

const P1 = styled.path`
  stroke-dasharray: ${({ length }) => length && `${length} 0`};
  opacity: ${({ visible }) => visible ? 1 : 0};
  transition: opacity .25s linear;
  ${({ visible }) => visible && css`
      animation: ${({ length }) => drawPath(length * 2)} 2s ease;
    `};
  ${({ death }) => death && css`
    transition: d 2s ease;
  `};
`

const Blood = styled.path`
  opacity: ${({ death }) => death ? 1 : 0};
  transform: ${({ death }) => death ? 'translateY(0px)' : 'translateY(-10px)'};
  transition: transform 1s ease-in ${({ delay }) => delay}, opacity .5s linear ${({ delay }) => delay};
`


const Hangman = ({ wrongGuesses }) => {
  const [baseLength, setBaseLength] = useState(0)
  const [standLength, setStandLength] = useState(0)
  const [roofLength, setRoofLength] = useState(0)
  const [stabilityLength, setStabilityLength] = useState(0)
  const [ropeLength, setRopeLength] = useState(0)

  const base = useRef()
  const stand = useRef()
  const roof = useRef()
  const stability = useRef()
  const rope = useRef()

  useEffect(() => {
    setBaseLength(base.current.getTotalLength())
    setStandLength(stand.current.getTotalLength())
    setRoofLength(roof.current.getTotalLength())
    setStabilityLength(stability.current.getTotalLength())
    setRopeLength(rope.current.getTotalLength())
  })

  const death = wrongGuesses > 5

  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 574'>
      <g id='Page-1' fill='none' fillRule='evenodd'>
        <g id='hangman-purple' transform='translate(12 12)'>
          <g id='blood' transform='translate(365 460)'>
            <Blood
            death={death}
            delay={'2.5s'}
              id='Path'
              fill='#BE1631'
              d='M22.826 26.26c-1.095-2.844-7.053-3.03-13.31-.412C3.263 28.466-.92 32.895.175 35.739c1.095 2.846 7.053 3.03 13.308.412 6.256-2.617 10.439-7.046 9.344-9.89z'
            />
            <Blood
              death={death}
              delay={'2.5s'}
              id='Path'
              fill='#9D1228'
              d='M22.825 26.595c-.278-.697-.866-1.229-1.691-1.595.876 2.768-3.283 6.95-9.447 9.444-4.704 1.902-9.24 2.28-11.687 1.195.017.055.033.11.055.165 1.1 2.764 7.09 2.943 13.377.4 6.288-2.543 10.493-6.846 9.393-9.61v.001z'
            />
            <Blood death={death}
              delay={'3.5s'} id='Path' fill='#BE1631' d='M106 4.5c0-2.485-3.806-4.5-8.5-4.5S89 2.015 89 4.5 92.806 9 97.5 9s8.5-2.015 8.5-4.5z' />
            <Blood
              death={death}
              delay={'3.5s'}
              id='Path'
              fill='#9D1228'
              d='M97.5 8.348c-4.01 0-7.37-1.854-8.264-4.348-.153.425-.236.87-.236 1.326C89 8.46 92.806 11 97.5 11s8.5-2.54 8.5-5.674c0-.457-.083-.9-.236-1.326-.895 2.494-4.254 4.348-8.264 4.348z'
            />
            <Blood
              death={death}
              delay={'3s'}
              id='Path'
              fill='#BE1631'
              d='M60.926 11.397c-6.17-1.398-14.783 1.013-19.24 5.387-4.454 4.373-3.335 13.984 3.105 10.452 4.902-2.689 14.35-4.174 19.239-5.386 7.567-1.878 3.066-9.053-3.104-10.453z'
            />
            <Blood
              death={death}
              delay={'3s'}
              id='Path'
              fill='#9D1228'
              d='M64.112 12c1.695 2.766 1.35 5.941-3.059 7.148-4.926 1.35-14.45 3.001-19.391 5.991-1.02.617-1.908.873-2.662.848.622 2.575 2.5 4.043 5.606 2.163 4.94-2.99 14.465-4.641 19.392-5.99 6.202-1.699 4.362-7.292.114-10.16z'
            />
            <Blood
              death={death}
              delay={'2s'}
              id='Path'
              fill='#BE1631'
              d='M88.457 50.947c-3.712-5.204 6.117-29.647-.299-32.658C81.94 15.37 63.201 35.516 55.5 35.516c-7.7 0-17.037-4.727-23.256-1.808-6.415 3.01-5.989 12.035-9.7 17.24C18.946 55.991 9 60.131 9 66.378c0 6.246 9.946 10.386 13.544 15.43 3.711 5.204 3.285 14.23 9.7 17.24 5.438 2.552 13.261-.743 20.29-1.61a31.917 31.917 0 0 1 5.933 0c7.028.867 14.851 4.162 20.29 1.61 6.415-3.01 5.988-12.036 9.7-17.24C92.054 76.764 102 72.624 102 66.377c0-6.246-9.946-10.386-13.543-15.43z'
            />
            <Blood
              death={death}
              delay={'2s'}
              id='Path'
              fill='#9D1228'
              d='M96.14 59c-1.533 4.67-8.806 8.064-11.632 12.106-3.267 4.673-2.892 12.777-8.538 15.48-4.787 2.293-11.673-.666-17.86-1.444a27.397 27.397 0 0 0-5.22 0c-6.188.778-13.074 3.737-17.86 1.444-5.646-2.703-5.271-10.807-8.538-15.48C23.666 67.064 16.393 63.67 14.858 59 11.737 61.604 9 64.355 9 67.698c0 6.374 9.946 10.597 13.543 15.743 3.712 5.31 3.285 14.517 9.7 17.588 5.439 2.604 13.262-.757 20.29-1.642a31.287 31.287 0 0 1 5.934 0c7.028.885 14.85 4.246 20.29 1.642 6.414-3.071 5.988-12.279 9.7-17.588C92.053 78.295 102 74.07 102 67.698c0-3.343-2.737-6.094-5.86-8.698z'
            />
          </g>
          <g id='diagram' stroke='#220F22'>
            <P1 ref={base} length={baseLength} visible={wrongGuesses > 0} id='base' strokeLinecap='round' strokeWidth='25' d='M.5 510.5h228' />
            <P1 ref={stand} length={standLength} visible={wrongGuesses > 1} id='stand' strokeLinecap='square' strokeWidth='25' d='M114.5 510.5V1' />
            <P1 ref={roof} length={roofLength} visible={wrongGuesses > 2} id='roof' strokeLinecap='round' strokeWidth='25' d='M114.5 1H471' />
            <P1 ref={stability} length={stabilityLength} visible={wrongGuesses > 3} id='stability' strokeWidth='25' d='M114.5 124.942L244.5 1' />
            <P1 ref={rope} length={ropeLength} visible={wrongGuesses > 4} death={wrongGuesses > 5} id='rope' strokeLinecap='round' strokeWidth='20' d={death ? 'M421 1v370' : 'M421 1v114'} />
          </g>
          <Human id='human' transform={death ? 'translate(368 150)' : 'translate(368 198)'}>
            <path id='l-leg' stroke='#220F22' strokeLinecap='round' strokeWidth='25' d='M45 211l-14 75.499v26.171' />
            <path id='r-leg' stroke='#220F22' strokeLinecap='round' strokeWidth='25' d='M63 210.5l13 79.284v22.386' />
            <path id='torso' fill='#220F22' d='M37.54 87L32 130.74v79.812l44 .5v-80.31L70.748 87z' />
            <path id='l-arm' stroke='#220F22' strokeLinecap='round' strokeWidth='25' d='M45 82c-14.228 17.86-23.66 30.394-28.295 37.6C12.069 126.807 6.5 139.34 0 157.2' />
            <path id='r-arm' stroke='#220F22' strokeLinecap='round' strokeWidth='25' d='M63 82c14.092 21.034 23.347 36.549 27.765 46.546 4.417 9.996 7.741 21.733 9.972 35.208' />
            <Head id='head' cx='54' cy='41' r='41' fill='#220F22' 
            transform={death ? 'translate(-28 5)' : undefined} 
            />
          </Human>
        </g>
      </g>
    </svg>
  )
}

const mapStateToProps = state => {
  return {
    wrongGuesses: wrongGuessCount(state.word, state.letters),
    isWinner: isWinner(state.word, state.letters),
    gameOver: gameFinished(state.word, state.letters)
  }
}

export default connect(mapStateToProps)(Hangman)
