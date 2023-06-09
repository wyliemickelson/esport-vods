import React, { useEffect, useState } from "react"
import IconContainer from "../Utils/IconContainer"
import styled from 'styled-components';

const volumeOnIcon = '/assets/icons/volumeOn.svg'
const volumeOffIcon = '/assets/icons/volumeOff.svg'

const VolumeSlider = ({ updateVolume }) => {
  const [volume, setVolume] = useState(0.5)
  const [muted, setMuted] = useState(false)
  const finalVolume = muted ? 0 : volume

  useEffect(() => {
    updateVolume(finalVolume)
  }, [finalVolume, updateVolume])

  return (
    <StyledVolumeSlider>
      <input
        type="range"
        min={0}
        max={1}
        step={0.02}
        value={finalVolume}
        onChange={event => {
          setVolume(event.target.valueAsNumber)
        }}
      />
      <button onClick={() => setMuted(m => !m) }>
        <IconContainer src={muted ? volumeOffIcon : volumeOnIcon} size='30px' padding='0' />
      </button>
    </StyledVolumeSlider>
  )
}

const StyledVolumeSlider = styled.div`
  display: flex;
  column-gap: 1rem;

  input {
    width: 75px;
  }

  margin: 0.5rem;
    padding: 1rem;
    border-radius: 1rem;
    background-color: var(--bg-color-dark);
    filter: brightness(130%);
`

export default VolumeSlider