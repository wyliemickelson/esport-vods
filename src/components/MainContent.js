import React from 'react'
import styled from 'styled-components';
import TournamentSideBar from './Tournaments/TournamentSideBar'
import TournamentSection from './Tournaments/TournamentSection'
import TournamentListDropdown from './Tournaments/TournamentListDropdown';
import { useState } from 'react';
import useViewPort from './Utils/useViewport';

const MainContent = ({ tournaments, currentTournament, setCurrentTournament, gameFilter}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen)
  const { width } = useViewPort()
  const useMobileSidebar = width < 1050

  return (
    <StyledMainContent useMobileSidebar={useMobileSidebar}>
      {useMobileSidebar
        ? <TournamentListDropdown 
            tournaments={tournaments}
            currentTournament={currentTournament}
            setCurrentTournament={setCurrentTournament}
            dropdownOpen={dropdownOpen}
            toggleDropdown={toggleDropdown}
          />
        : <TournamentSideBar
            tournaments={tournaments}
            currentTournament={currentTournament}
            setCurrentTournament={setCurrentTournament}
          />
      }
      {currentTournament && !dropdownOpen && <TournamentSection tournament={currentTournament} />}
    </StyledMainContent>
  )
}

export default MainContent

const StyledMainContent = styled.div`
  display: flex;

  ${props => props.useMobileSidebar && `
    flex-direction: column;
  `}
`