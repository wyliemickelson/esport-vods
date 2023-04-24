import React from 'react'
import styled from 'styled-components';
import MatchInfo from './MatchInfo';
import VodList from './VodList';
import { useState } from 'react';

const MatchCard = ({ match, gameType, hideVodLists}) => {
  const [vodsShown, setVodsShown] = useState(false)
  const showVods = match.isCompleted && (!hideVodLists || vodsShown)
  const toggleVodsShown = () => {
    if (hideVodLists) {
      setVodsShown(!vodsShown)
    }
  }
  
  return (
    <StyledMatchCard hideVodLists={hideVodLists}>
      <MatchInfo
        onClick={toggleVodsShown}
        match={match}
        gameType={gameType}
      />
      {showVods &&  <VodList match={match} />}
    </StyledMatchCard>
  )
}

export default MatchCard

const StyledMatchCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  border-bottom: 1px solid rgba(211, 211, 211, 0.1);

  ${props => props.hideVodLists && `
    flex-direction: column;
  `}
`