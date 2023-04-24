import React from 'react'
import TournamentSideBar from './TournamentSideBar'
import TournamentCard from './TournamentCard'
import styled from 'styled-components';

const TournamentListDropdown = ({ tournaments, currentTournament, setCurrentTournament, dropdownOpen, toggleDropdown }) => {

  return (
    <StyledTournamentListDropdown>
      {currentTournament &&
        <TournamentCard
          tournament={currentTournament}
          onClick={toggleDropdown}
        />
      }
      {(dropdownOpen || !currentTournament) &&
        <TournamentSideBar
          isMobile={true}
          eventClick={toggleDropdown}
          tournaments={tournaments}
          currentTournament={currentTournament}
          setCurrentTournament={setCurrentTournament}
        />}
    </StyledTournamentListDropdown>
  )
}

const StyledTournamentListDropdown = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  z-index: 4;
  top: 61px;
`

export default TournamentListDropdown