import styled, { css } from 'styled-components'

export const Button = styled.button`
    padding: 10px 20px;
    font-family: 'Sanchez', serif;
    font-size: 18px;
    border-radius: 3px;
    background: rgb(246, 199, 176);
    color: rgb(190, 22, 49);
    ${({ nav }) => nav ? css`
        box-shadow: 0px 4px 10px rgb(190, 22, 49);
        @media (max-width: 767px) {
            margin-bottom: 15px;
        }
  ` : css`
        text-transform: uppercase;
        ${({ purple }) => purple && css`
        background: rgb(34, 15, 34);
        color: rgb(246, 199, 176);
        `}
        &:hover {
            box-shadow: 0px 1px 10px rgb(190, 22, 49);
        } 
  `}
`
