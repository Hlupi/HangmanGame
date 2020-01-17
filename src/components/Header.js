import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    padding: 10px 20px;
    box-shadow: 0px 4px 10px red;
`

const H1 = styled.h1`
    color: #efefef;
    text-shadow: 0px 3px 3px rgb(190,22,49);
    color: rgb(238,107,64);
`


const Header = ({ gamePage, onClick }) => {

    const buttontext = gamePage ? 'Back' : 'Play'
    return(
        <header>
            <Button onClick={onClick}>{buttontext}</Button>
            <H1>How's it hanging man?</H1>
        </header>
    )
}

export default Header
