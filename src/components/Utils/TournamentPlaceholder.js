import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components';

const TournamentPlaceholder = () => {
  const { gameType } = useParams()
  const gameIcon = require(`./../../assets/game-icons/${gameType}.svg`)

  return (
    <ImageContainer>
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
`

export default TournamentPlaceholder