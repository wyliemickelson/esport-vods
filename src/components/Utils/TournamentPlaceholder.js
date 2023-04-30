import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

const TournamentPlaceholder = ({ nav }) => {
  const { gameType } = useParams()
  const gameIcon = require(`./../../assets/game-icons/${gameType}.svg`)

  return (
    <ImageContainer nav={nav}>
      <img src={gameIcon} alt='game icon' />
    </ImageContainer>
  )
}

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  img {
    max-width: 300px;
    width: 20%;
  }

  ${props => props.nav && `
    width: auto;
    padding-right: 5%;

    img {
      max-width: 40px;
      width: 100%;
    }
  `}
`

export default TournamentPlaceholder