import React from 'react'
import styled from 'styled-components';
import MatchInfo from './MatchInfo';
import VodList from './VodList';
import { useState, useEffect } from 'react';
import SpoilerCover from './SpoilerCover';
import useViewPort from '../../Utils/useViewport';

const MatchCard = ({ match, gameType, forceMobile = false, refProp }) => {
  const [vodsShown, setVodsShown] = useState(false)
  const [revealed, setRevealed] = useState(match.revealed)
  const { width } = useViewPort()
  const isMobile = forceMobile || width < 750
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
      <div ref={refProp}></div>
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
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 5fr 2fr 2fr 1fr;

  border-bottom: 1px solid rgba(211, 211, 211, 0.1);

  ${props => props.isMobile && `
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    padding: 0.5rem;
  `}
`

const Divider = styled.div`
  padding-top: 1rem;
  margin-bottom: 0.5rem;
  width: 100%;
  border-bottom: 1px solid rgba(211, 211, 211, 0.1);
`