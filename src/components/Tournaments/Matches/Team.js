import React from 'react'
import styled from 'styled-components';
import IconContainer from '../../Utils/IconContainer';
import { useContext } from 'react';
import { CurrentTournamentContext } from '../../../contexts/CurrentTournamentContext';

const Team = ({ team, side, fullName = false, imgSize, placeholder, onClick, isMobile }) => {
  const { currentTournament } = useContext(CurrentTournamentContext)
  const participants = currentTournament.details.participants
  const matchedTeam = placeholder ? team : participants.find(p => p._id === team._id)
  const teamIcon =  `/assets/${matchedTeam.logoSrc}`

  const shownName = fullName ? matchedTeam.name : matchedTeam.shortName

  return (
    <StyledTeam imgSize={imgSize} onClick={onClick}>
      {side === 'left' && <p style={{'textAlign': 'right'}}>{placeholder ? team.name : shownName}</p>}
      <IconContainer src={teamIcon} alt='team icon' size={imgSize} />
      {side === 'right' && <p style={{'textAlign': 'left'}}>{placeholder ? team.name : shownName}</p>}
    </StyledTeam>
  )
}

const StyledTeam = styled.div`
  
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
  align-items: center;
`

export default Team