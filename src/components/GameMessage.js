import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { isWinner, gameFinished  } from '../lib/game'

const Modal = styled.article`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(${({win}) => win ?' 238,107,64' : '190,22,49'}, 0.8);
    cursor: pointer;
`

const Card = styled.div`
    margin: 0 auto;
    padding: 20px;
    width: 40%;
    background: rgb(246, 199, 176);
    border-radius: 10px;
    color: rgb(34,15,34);
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
`

const Title = styled.h3`
    text-shadow: 0px 3px 3px ${({win}) => win ? 'rgb(238,107,64)' : 'rgb(190,22,49)'};
`

const Word = styled.span`
    text-transform: uppercase;
    font-weight: bold;
`

const Quotes = styled.span`
    text-shadow: 0px 2px 2px ${({win}) => win ? 'rgb(238,107,64)' : 'rgb(190,22,49)'};
    font-weight: bold;
`


const GameMessage = ({ isWinner, gameOver, word, onClick }) => {
    const title = isWinner ? 'Great job' : 'Oops, looks like you lost'
    const message = isWinner ? <p>You did so well and you didn't even die! The word was indeed <Quotes win>'</Quotes><Word>{word}</Word><Quotes>'</Quotes></p> : <p>The word was actually <Quotes>'</Quotes><Word>{word}</Word><Quotes>'</Quotes>. Not to worry, you can try again. Better luck next time! (:</p>

    return (
        <Modal win={isWinner} onClick={onClick}>
            <Card>
                <Title win={isWinner}>{title}</Title>
                {message}
            </Card>
        </Modal>
    )
}

const mapStateToProps = state => {
    return {
        isWinner: isWinner(state.word, state.letters),
        gameOver: gameFinished(state.word, state.letters),
        word: state.word
    }
}

export default connect(mapStateToProps)(GameMessage)
