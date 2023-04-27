import React, { useContext } from 'react'
import styled from 'styled-components';
import playIcon from './../../assets/player-icons/play.svg'
import pauseIcon from './../../assets/player-icons/pause.svg'
import fullscreenIcon from './../../assets/player-icons/fullscreen.svg'
import IconContainer from '../Utils/IconContainer';
import FFControls from './FFControls';
import VolumeSlider from './VolumeSlider';
import { PlayerPausedContext } from '../../contexts/PlayerPausedContext';

// still need volume, fullscreen, and quality

const PlayerControls = ({ controls }) => {
  const { play, pause, seek, fullscreen, setVolume } = controls
  const { isPaused } = useContext(PlayerPausedContext)

  return (
    <ControlsContainer>
      <StyledPlayerControls extraStyle={``}>
        <FFControls seek={seek} reversed />

        <StyledIconButton onClick={() => {
          isPaused ? play() : pause()
        }}>
          <IconContainer src={isPaused ? playIcon : pauseIcon} size='30px' />
        </StyledIconButton>
        {/* <StyledIconButton onClick={pause}>
          <IconContainer src={pauseIcon} size='30px' />
        </StyledIconButton> */}

        <FFControls seek={seek} />
      </StyledPlayerControls>

      <StyledPlayerControls>
        <VolumeSlider updateVolume={setVolume} />
        <StyledIconButton onClick={fullscreen}>
          <IconContainer src={fullscreenIcon} size='30px' />
        </StyledIconButton>
      </StyledPlayerControls>

    </ControlsContainer>
  )
}

const ControlsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  `

export const StyledIconButton = styled.button`
    margin: 0.5rem;
    padding: 1rem;
    border-radius: 1rem;
    background-color: var(--bg-color-dark);
    filter: brightness(130%);
  `

const StyledPlayerControls = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin-top: 1rem;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    background-color: var(--bg-color-dark);
    align-items: center;
  `

export default PlayerControls