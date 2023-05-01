import React from 'react'
import styled from 'styled-components';
import Team from './Team';
import ScoreCard from './ScoreCard';

const MatchInfo = ({ match, gameType, onClick, revealed, extraStyles, fullName, imgSize, showScores, handleCheckBox, vodsShown }) => {
  const fillerTeam = {
    name: 'TBD',
    logoSrc: `game-icons/${gameType}.svg`
  }

  const placeholder = !match?.isCompleted || !revealed

  const team1 = !placeholder ? match.matchData.team1 : fillerTeam
  const team2 = !placeholder ? match.matchData.team2 : fillerTeam

  onClick = placeholder ? null : onClick

  return (
    <StyledMatchInfo onClick={onClick} revealed={revealed} extraStyles={extraStyles} placeholder={placeholder ? 1 : 0} vodsShown={vodsShown}>
      <Team team={team1} placeholder={placeholder} fullName={fullName} side='left' imgSize={imgSize} />
      <ScoreCard handleCheckBox={handleCheckBox} match={match} revealed={revealed} showScores={showScores} placeholder={placeholder} />
      <Team team={team2} placeholder={placeholder} fullName={fullName} side='right' imgSize={imgSize} />
    </StyledMatchInfo>
  )
}

MatchInfo.defaultProps = {
  revealed: true,
  fullName: false,
}

export default MatchInfo

const StyledMatchInfo = styled.div`
  display: grid;
  grid-column: 2;
  ${props => props.placeholder && !props.vodsShown && `
    grid-column: 1 / -1;
  `}
  white-space: nowrap;
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