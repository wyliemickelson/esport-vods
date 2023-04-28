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

  grid-column: 2;
  white-space: nowrap;
  display: grid;
  grid-template-columns: 175px 50px 175px;

  text-align: center;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 750px) {
    width: 100%;
    grid-template-columns: 125px 50px 125px;
  }

  @media screen and (max-width: 750px) {
      grid-column-gap: 1rem;
  }

  @media screen and (min-width: 1300px) {
      grid-column-gap: 2rem;
  }

  ${props => !props.revealed && `
    filter: blur(15px) grayscale(1);
  `}

  ${props => props.extraStyles}
`