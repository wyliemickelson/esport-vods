import React from 'react'
import styled from 'styled-components';
import MatchInfo from './MatchInfo';
import VodList from './VodList';
import { useState, useEffect } from 'react';
import SpoilerCover from './SpoilerCover';

const MatchCard = ({ match, gameType, hideVodLists}) => {
  const [vodsShown, setVodsShown] = useState(false)
  const [revealed, setRevealed] = useState(match.revealed)
  const showVods = match.isCompleted && (!hideVodLists || vodsShown)
  const toggleVodsShown = () => {
    if (hideVodLists) {
      setVodsShown(!vodsShown)
    }
  }

  useEffect(() => {
    if (!match.isCompleted) {
      setRevealed(true)
    }
  }, [match])
  
  return (
    <StyledMatchCard hideVodLists={hideVodLists}>
      <MatchInfo
        onClick={toggleVodsShown}
        match={match}
        gameType={gameType}
        revealed={revealed}
      />
      {showVods &&  <VodList match={match} revealed={revealed} />}
      {!revealed && <SpoilerCover onClick={() => setRevealed(true)} />}
    </StyledMatchCard>
  )
}

export default MatchCard

const StyledMatchCard = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  border-bottom: 1px solid rgba(211, 211, 211, 0.1);

  ${props => props.hideVodLists && `
    flex-direction: column;
  `}
`