import React from 'react'
import styled from 'styled-components';
import TournamentSideBar from './Tournaments/TournamentSideBar'
import TournamentSection from './Tournaments/TournamentSection'
import TournamentListDropdown from './Tournaments/TournamentListDropdown';
import { useState, useEffect } from 'react';
import useViewPort from './Utils/useViewport';
import { useParams } from 'react-router-dom';

const MainContent = ({ tournaments, currentTournament, gameFilter}) => {
  const { tournamentId } = useParams()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { width } = useViewPort()
  const useMobileSidebar = width < 1050

  useEffect(() => {
    setDropdownOpen(tournamentId ? false : true)
  }, [tournamentId])

  return (
    <StyledMainContent useMobileSidebar={useMobileSidebar}>
      {useMobileSidebar
        ? <TournamentListDropdown 
            tournaments={tournaments}
            currentTournament={currentTournament}
            dropdownOpen={dropdownOpen}
            setDropdownOpen={setDropdownOpen}
          />
        : <TournamentSideBar
            tournaments={tournaments}
            currentTournament={currentTournament}
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