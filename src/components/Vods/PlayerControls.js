import React from 'react'
import styled from 'styled-components';
import playIcon from './../../assets/player-icons/play.svg'
import pauseIcon from './../../assets/player-icons/pause.svg'
import IconContainer from '../Utils/IconContainer';
import FFControls from './FFControls';

const PlayerControls = ({ controls }) => {
  const { play, pause, seek } = controls

  return (
    <StyledPlayerControls>
      <FFControls seek={seek} reversed />

      <StyledIconButton onClick={play}>
        <IconContainer src={playIcon} size='30px' />
      </StyledIconButton>
      <StyledIconButton onClick={pause}>
        <IconContainer src={pauseIcon} size='30px' />
      </StyledIconButton>

      <FFControls seek={seek} />
    </StyledPlayerControls>
  )
}

const StyledIconButton = styled.button`
    margin: 0.5rem;
    padding: 1rem;
    border-radius: 1rem;
    background-color: var(--bg-color-dark);
    filter: brightness(130%);
`

const StyledPlayerControls = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: fit-content;
  margin: 0 auto;
  margin-top: 1rem;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  background-color: var(--bg-color-dark);
  align-items: center;
`

export default PlayerControls