import React from 'react'
import TournamentSideBar from './TournamentSideBar'
import TournamentCard from './TournamentCard'
import styled from 'styled-components';
import { useContext } from 'react';
import { CurrentTournamentContext } from '../../contexts/CurrentTournamentContext';

const TournamentListDropdown = ({ tournaments, dropdownOpen, setDropdownOpen }) => {
  const currentTournament = useContext(CurrentTournamentContext)

  return (
    <StyledTournamentListDropdown>
      {currentTournament &&
        <TournamentCard
          tournament={currentTournament}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        />
      }
      {(dropdownOpen || !currentTournament) &&
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
  top: 61px;
`

export default TournamentListDropdown