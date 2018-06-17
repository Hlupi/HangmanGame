import React from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'

export default function Intro (props) {
  return (
    <div>
      <Title content='Welcome!' />
      <p>Try your chances and <Link to="/hangman">start playing!</Link></p>
    </div>
  )
}
