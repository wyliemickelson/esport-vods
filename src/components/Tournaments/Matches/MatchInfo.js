import React from 'react'
import styled from 'styled-components';
import Team from './Team';

const MatchInfo = ({ match, gameType, onClick, revealed }) => {
  const fillerTeam = {
    name: 'TBD',
    logoSrc: `game-icons/${gameType}.svg`
  }

  const team1 = match.isCompleted ? match.matchData.team1 : fillerTeam
  const team2 = match.isCompleted ? match.matchData.team2 : fillerTeam

  return (
    <StyledMatchInfo onClick={onClick} revealed={revealed}>
      <Team team={team1} side='left' />
      <p>VS</p>
      <Team team={team2} side='right' />
    </StyledMatchInfo>
  )
}

export default MatchInfo

const StyledMatchInfo = styled.div`
  white-space: nowrap;
  display: flex;
  column-gap: 1rem;
  align-items: center;
  justify-content: space-between;
  align-items: center;

  ${props => !props.revealed && `
    filter: blur(15px) grayscale(1);
  `}
`