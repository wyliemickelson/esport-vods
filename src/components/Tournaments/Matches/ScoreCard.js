import React from 'react'
import CheckBox from './CheckBox'
import styled from 'styled-components';

const ScoreCard = ({ match, handleCheckBox, showScores, revealed, placeholder, noCheckBox }) => {
  const onClick = placeholder ? null : handleCheckBox
  return (
    <StyledScoreCard onClick={onClick} placeholder={placeholder ? 1 : 0} noCheckBox={noCheckBox}>
      {showScores ? <p>{match.matchData.team1.score} - {match.matchData.team2.score}</p> : <p>VS</p>}
      {!noCheckBox && revealed && !placeholder && <CheckBox checked={showScores} />}
    </StyledScoreCard>
  )
}

const StyledScoreCard = styled.div`
    cursor: ${props => props.placeholder || props.noCheckBox ? 'default' : 'pointer'};
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`

export default ScoreCard