import styled from 'styled-components';
import React from 'react'

const Event = ({ tournament, setCurrentTournamentId, selected, onClick, isMobile }) => {

  const img = require(`./../assets/${tournament.details.mainImgSrc}`)
  return (
    <StyledEvent isMobile={isMobile} selected={selected} onClick={() => onClick(tournament)} >
      <div>
        <img src={img} alt='event banner' />
      </div>
      <p>{tournament.details.title}</p>
    </StyledEvent>
  )
}

export default Event

const StyledEvent = styled.button`
  border-bottom: 1px solid rgba(211, 211, 211, 0.1);
  box-sizing: border-box;
  width: 100%;
  display: flex;
  padding: 1rem;
  align-items: center;
  column-gap: 1rem;
  background-color: var(--bg-color-dark-alt);

  border-right: ${props => props.selected ? '4px solid red' : '' };

  div {
    width: 60px;
    min-width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${props => props.isMobile && `
    position: sticky;
    z-index: 5;
    top: 61px;
  `}
`
