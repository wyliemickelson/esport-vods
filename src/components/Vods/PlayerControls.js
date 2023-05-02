import React, { useContext } from 'react'
import styled from 'styled-components';

import IconContainer from '../Utils/IconContainer';
import FFControls from './FFControls';
import VolumeSlider from './VolumeSlider';
import { PlayerContext } from '../../contexts/PlayerContext';
import useViewPort from '../Utils/useViewport';
const playIcon = '/assets/icons/play.svg'
const pauseIcon = '/assets/icons/pause.svg'
const fullscreenIcon = '/assets/icons/fullscreen.svg'

const PlayerControls = ({ controls, useControls }) => {
  const { play, pause, seek, fullscreen, setVolume } = controls
  const { isPaused } = useContext(PlayerContext)
  const { width } = useViewPort()

  return (
    <>
      {useControls &&
        <ControlsContainer>
          {width > 1200 && <Container width={width}></Container>}

          <StyledPlayerControls>
            <FFControls seek={seek} reversed />

            <StyledIconButton onClick={() => isPaused ? play() : pause()}>
              <IconContainer src={isPaused ? playIcon : pauseIcon} size='30px' padding='0'/>
            </StyledIconButton>

            <FFControls seek={seek} />
          </StyledPlayerControls>

          <Container width={width}>
            <StyledPlayerControls>
              <VolumeSlider updateVolume={setVolume} />
              <StyledIconButton onClick={fullscreen}>
                <IconContainer src={fullscreenIcon} size='30px' padding='0' />
              </StyledIconButton>
            </StyledPlayerControls>
          </Container>
        </ControlsContainer>
      }

    </>
  )
}

const Container = styled.div`
  ${props => props.width > 1200 && `width: 300px`}

`

const ControlsContainer = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 1rem;
    width: 97%;
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
    justify-content: center;
    border-radius: 1rem;
    padding: 0.6rem 1rem;
    background-color: var(--bg-color-dark);
    align-items: center;
  `

export default PlayerControls