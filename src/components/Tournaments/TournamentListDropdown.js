import React from 'react'
import TournamentSideBar from './TournamentSideBar'
import TournamentCard from './TournamentCard'
import styled from 'styled-components';

const TournamentListDropdown = ({ tournaments, dropdownOpen, currentTournament, setDropdownOpen }) => {
  return (
    <StyledTournamentListDropdown>
      {currentTournament &&
        <TournamentCard
          tournament={currentTournament}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        />
      }
      {dropdownOpen &&
        <TournamentSideBar
          isMobile={true}
          eventClick={() => setDropdownOpen(false)}
          tournaments={tournaments}
          currentTournament={currentTournament}
        />}
    </StyledTournamentListDropdown>
  )
}

const StyledTournamentListDropdown = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  z-index: 4;
  top: 78px;
`

export default TournamentListDropdown