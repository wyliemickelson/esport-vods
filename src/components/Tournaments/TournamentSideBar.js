import React from 'react'
import TournamentList from './TournamentList'
import styled from 'styled-components';
import { useContext } from 'react';
import { LoadedTournamentsContext } from '../../contexts/LoadedTournamentsContext';
import { CurrentTournamentContext } from '../../contexts/CurrentTournamentContext';

const TournamentSideBar = ({ tournaments, isMobile, eventClick }) => {
  const { isLoading } = useContext(LoadedTournamentsContext)
  const { currentTournament } = useContext(CurrentTournamentContext)
  const showHeader = !isMobile || (isMobile && !currentTournament)

  return (
    <StyledTournamentSideBar isMobile={isMobile} currentTournament={currentTournament} isLoading={isLoading}>
      {showHeader && <h3>Events</h3>}
      <TournamentList
        tournaments={tournaments}
        currentTournament={currentTournament}
        eventClick={eventClick}
      />
    </StyledTournamentSideBar>
  )
}

export default TournamentSideBar

const StyledTournamentSideBar = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    padding: 1rem;
    border-bottom: 2px solid rgba(211, 211, 211, 0.1);
    width: 100%;
  }
  position: sticky;
  top: 61px;
  min-width: 320px;
  width: 33%;
  background-color: var(--bg-color-dark-alt);
  height: calc(100vh - 61px);
  color: var(--text-color-2);

  ${props => props.isMobile && props.currentTournament && `
    width: 100%;
    height: calc(100vh - 154px);
  `}

${props => props.isMobile && `
    width: 100%;
  `}
`