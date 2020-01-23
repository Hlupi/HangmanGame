import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { isWinner } from '../lib/game'
import NewGameButton from './NewGameButton'

const Modal = styled.article`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(${({ win }) => win ? ' 238,107,64' : '190,22,49'}, 0.8);
    @media(min-width: 768px) {
        left: 50%;
    }
`

const Card = styled.div`
    margin: 0 auto;
    padding: 20px;
    width: 80%;
    background: rgb(246, 199, 176);
    border-radius: 10px;
    color: rgb(34,15,34);
    position: relative;
    top: 50%;
    transform: translateY(-50%);
`

const Title = styled.h3`
    text-shadow: 0px 3px 3px ${({ win }) => win ? 'rgb(238,107,64)' : 'rgb(190,22,49)'};
`

const Message = styled.p`
    margin-bottom: 10px;
`

const Word = styled.span`
    text-transform: uppercase;
    font-weight: bold;
`

const Quotes = styled.span`
    text-shadow: 0px 2px 2px ${({ win }) => win ? 'rgb(238,107,64)' : 'rgb(190,22,49)'};
    font-weight: bold;
`


const GameMessage = ({ isWinner, word }) => {
    const title = isWinner ? 'Great job' : 'Oops, looks like you lost'
    const message = isWinner ?
        <Message>You did so well and you didn't even die! <br /> The word was indeed <Quotes win>'</Quotes><Word>{word}</Word><Quotes>'</Quotes></Message>
        :
        <Message>The word was actually <Quotes>'</Quotes><Word>{word}</Word><Quotes>'</Quotes>. <br /> Not to worry, you can try again. Better luck next time! (:</Message>

    return (
        <Modal win={isWinner}>
            <Card>
                <Title win={isWinner}>{title}</Title>
                {message}
                <NewGameButton purple />
            </Card>
        </Modal>
    )
}

const mapStateToProps = state => {
    return {
        isWinner: isWinner(state.word, state.letters),
        word: state.word
    }
}

export default connect(mapStateToProps)(GameMessage)
