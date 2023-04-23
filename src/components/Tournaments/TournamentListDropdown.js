import React from 'react'
import TournamentSideBar from './TournamentSideBar'
import TournamentCard from './TournamentCard'
import styled from 'styled-components';

const TournamentListDropdown = ({ tournaments, currentTournament, setCurrentTournament, dropdownOpen, toggleDropdown }) => {

  return (
    <StyledTournamentListDropdown>
      {currentTournament &&
        <TournamentCard
          extraStyles={`
            position: sticky;
            z-index: 5;
            top: 61px;
          `}
          tournament={currentTournament} 
          onClick={toggleDropdown}
        />
      }
      {dropdownOpen && 
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
`

export default TournamentListDropdown