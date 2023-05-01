import React from 'react'
import styled from 'styled-components';
import MatchInfo from './MatchInfo';
import VodList from './VodList';
import { useState, useContext } from 'react';
import SpoilerCover from './SpoilerCover';
import useViewPort from '../../Utils/useViewport';
import { UserDataContext } from '../../../contexts/UserDataContext';
import HideButton from './HideButton';

const MatchCard = ({ match, gameType, forceMobile = false, refProp }) => {
  const [vodsShown, setVodsShown] = useState(false)
  const { width } = useViewPort()
  const isMobile = forceMobile || width < 750
  const showVods = match.isCompleted && (!isMobile || vodsShown)
  const { userRevealedIds, userWatchedIds, addUserId, removeUserId } = useContext(UserDataContext)

  const defaultRevealed = match.revealed
  const revealed = userRevealedIds.includes(match._id) || defaultRevealed

  const showScores = userWatchedIds.includes(match._id)

  const showHideButton = !defaultRevealed && revealed

  const toggleVodsShown = () => {
    if (isMobile) {
      setVodsShown(!vodsShown)
    }
  }

  const handleHide = () => {
    removeUserId(match._id, 'revealed')
    setVodsShown(false)
  }

  const handleCheckBoxClick = (e) => {
    e.stopPropagation()
    if (showScores) {
      removeUserId(match._id, 'watched')
    } else {
      addUserId(match._id, 'watched')
    }
  }
  
  return (
    <StyledMatchCard isMobile={isMobile}>
      <div ref={refProp}></div>
      {showHideButton && <HideButton onClick={handleHide} isMobile={isMobile} />}
      <MatchInfo
        handleCheckBox={handleCheckBoxClick}
        showScores={showScores}
        onClick={toggleVodsShown}
        match={match}
        gameType={gameType}
        vodsShown={showVods}
        revealed={revealed}
        isMobile={isMobile}
      />
      {isMobile && vodsShown && <Divider />}
      {showVods &&  <VodList match={match} revealed={revealed} isMobile={isMobile} />}
      {!revealed && <SpoilerCover onClick={() => addUserId(match._id, 'revealed')} />}
    </StyledMatchCard>
  )
}

export default MatchCard

const StyledMatchCard = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 5fr 2fr 2fr 1fr;
  overflow: hidden;

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