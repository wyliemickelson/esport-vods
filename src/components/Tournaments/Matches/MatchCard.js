import React from 'react'
import styled from 'styled-components';
import MatchInfo from './MatchInfo';
import VodList from './VodList';
import { useState, useEffect } from 'react';
import SpoilerCover from './SpoilerCover';
import useViewPort from '../../Utils/useViewport';

const MatchCard = ({ match, gameType }) => {
  const [vodsShown, setVodsShown] = useState(false)
  const [revealed, setRevealed] = useState(match.revealed)
  const { width } = useViewPort()
  const isMobile = width < 750
  const showVods = match.isCompleted && (!isMobile || vodsShown)

  const toggleVodsShown = () => {
    if (isMobile) {
      setVodsShown(!vodsShown)
    }
  }

  useEffect(() => {
    if (!match.isCompleted) {
      setRevealed(true)
    }
  }, [match])
  
  return (
    <StyledMatchCard isMobile={isMobile}>
      <MatchInfo
        onClick={toggleVodsShown}
        match={match}
        gameType={gameType}
        isMobile={isMobile}
        vodsShown={vodsShown}
        revealed={revealed}
      />
      {isMobile && vodsShown && <Divider />}
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

  ${props => props.isMobile && `
    flex-direction: column;
  `}
`

const Divider = styled.div`
  padding-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  border-bottom: 1px solid rgba(211, 211, 211, 0.1);
`