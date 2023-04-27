import React from 'react'
import styled from 'styled-components';
import IconContainer from '../Utils/IconContainer';
import fastForwardIcon from './../../assets/player-icons/fastForward.svg'

const FFControls = ({ seek, reversed }) => {
  const times = [
    {
      seconds: reversed ? -10 : 10,
      text: '10s'
    },
    {
      seconds: reversed ? -60 : 60,
      text: '1m'
    },
    {
      seconds: reversed ? -300 : 300,
      text: '5m'
    },
  ]

  return (
    <StyledFFControls reversed={reversed}>
      {times.map(time => 
        <StyledFFButton onClick={() => seek(time.seconds)} key={time.text}>
          <IconContainer src={fastForwardIcon} flipped={reversed} size='30px' />
          <p>{time.text}</p>
        </StyledFFButton>
      )}
    </StyledFFControls>
  )
}

FFControls.defaultProps = {
  reversed: false,
}

const StyledFFControls = styled.div`
  display: flex;
  flex-direction: ${props => props.reversed ? 'row-reverse' : 'row'};
  border-radius: 1rem;
  background-color: var(--bg-color-dark);
  filter: brightness(130%);
  padding: 0 0.5rem;
`

const StyledFFButton = styled.button`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
`

export default FFControls