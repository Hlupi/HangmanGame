import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Title from './Title'

const Section = styled.section`
  margin-bottom: 20px;
  padding: 20px 10px;
  background-image: linear-gradient(rgb(62, 3, 36), rgb(34, 15, 34));
  background-repeat: no-repeat;
  border-radius: 10px;
  box-shadow: 1px 1px 15px rgba(36, 30, 36, 0.3);
  @media (min-width: 768px) {
    margin: 0 auto 40px;
    padding: 40px;
    max-width: 680px;
  }
`

const Text = styled.p`
  margin-bottom: 15px;
  color: rgb(246, 199, 176);
`

const StyledLink = styled(Link)`
  color: rgb(190, 22, 49);
  text-transform: uppercase;
  font-size: 18px;
  display: inline-block;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  text-shadow: 1px 1px 3px rgb(238, 107, 64);
  letter-spacing: 3px;
  word-spacing: 7px;
`

export default function Intro() {
  return (
    <Section>
      <Title content='Did you know' />
      <Text>In 17th and 18th century Europe, criminals who were sentenced to death by hanging could demand the "Rite of Words and Life."</Text>
      <Text>
        In the "Rite of Words and Life" a criminal to be hanged was strung up over a 5 legged stand, and a board with a series of short ropes representing a word was displayed. The Executioner would
        pick the word and use charcoal to mark correctly guessed letters on the dashes of the board, and incorrect letters to the side. At every incorrect guess, the executioner would use a
        sledgehammer or axe to knock away a single leg of the stand. 5 wrong guesses and the criminal was hanged. If the entire word was filled-in correctly or guessed, the condemned would be set free
        from that sentence and not tried again on that crime.
      </Text>
      <Text>The irony here was that almost all of those criminals were illiterate.</Text>
      <StyledLink to='/hangman'>Try your odds</StyledLink>
    </Section>
  )
}
