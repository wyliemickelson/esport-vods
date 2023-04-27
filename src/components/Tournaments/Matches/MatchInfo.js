import React from 'react'
import styled from 'styled-components';
import Team from './Team';

const MatchInfo = ({ match, gameType, onClick, revealed, extraStyles, fullName, imgSize }) => {
  const fillerTeam = {
    name: 'TBD',
    logoSrc: `game-icons/${gameType}.svg`
  }

  const team1 = match.isCompleted ? match.matchData.team1 : fillerTeam
  const team2 = match.isCompleted ? match.matchData.team2 : fillerTeam

  return (
    <StyledMatchInfo onClick={onClick} revealed={revealed} extraStyles={extraStyles}>
      <Team team={team1} fullName={fullName} side='left' imgSize={imgSize} />
      <p>VS</p>
      <Team team={team2} fullName={fullName} side='right' imgSize={imgSize} />
    </StyledMatchInfo>
  )
}

MatchInfo.defaultProps = {
  revealed: true,
  fullName: false,
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

  ${props => props.extraStyles}
`