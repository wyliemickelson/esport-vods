import React from 'react'
import TournamentList from './TournamentList'
import styled from 'styled-components';

const TournamentSideBar = ({ tournaments, currentTournament, isMobile, eventClick }) => {
  return (
    <StyledTournamentSideBar isMobile={isMobile} currentTournament={currentTournament}>
      {!isMobile && <h3>Events</h3>}
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
  width: ${props => props.currentTournament ? '25%' : '100%'};
  background-color: var(--bg-color-dark-alt);
  height: calc(100vh - 61px);
  color: var(--text-color-2);

  ${props => props.isMobile && `
    width: 100%;
    height: calc(100vh - 154px)
  `}
`