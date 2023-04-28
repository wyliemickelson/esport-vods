import React, { useContext } from 'react'
import styled from 'styled-components';
import playIcon from './../../assets/player-icons/play.svg'
import pauseIcon from './../../assets/player-icons/pause.svg'
import fullscreenIcon from './../../assets/player-icons/fullscreen.svg'
import IconContainer from '../Utils/IconContainer';
import FFControls from './FFControls';
import VolumeSlider from './VolumeSlider';
import { PlayerContext } from '../../contexts/PlayerContext';
import useViewPort from '../Utils/useViewport';

const PlayerControls = ({ controls, useControls }) => {
  const { play, pause, seek, fullscreen, setVolume } = controls
  const { isPaused } = useContext(PlayerContext)
  const { width } = useViewPort()

  return (
    <>
      {useControls &&
        <ControlsContainer>
          {width > 1100 && <Container width={width}></Container>}

          <StyledPlayerControls>
            <FFControls seek={seek} reversed />

            <StyledIconButton onClick={() => isPaused ? play() : pause()}>
              <IconContainer src={isPaused ? playIcon : pauseIcon} size='30px' />
            </StyledIconButton>

            <FFControls seek={seek} />
          </StyledPlayerControls>

          <Container width={width}>
            <StyledPlayerControls>
              <VolumeSlider updateVolume={setVolume} />
              <StyledIconButton onClick={fullscreen}>
                <IconContainer src={fullscreenIcon} size='30px' />
              </StyledIconButton>
            </StyledPlayerControls>
          </Container>
        </ControlsContainer>
      }

    </>
  )
}

const Container = styled.div`
  ${props => props.width > 1100 && `width: 280px`}

`

const ControlsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
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
    border-radius: 1rem;
    padding: 0.6rem 1rem;
    background-color: var(--bg-color-dark);
    align-items: center;

    ${props => props.width && `width: ${props.width}`}
  `

export default PlayerControls