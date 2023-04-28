import React from 'react'
import styled from 'styled-components';
import TournamentSideBar from './Tournaments/TournamentSideBar'
import TournamentSection from './Tournaments/TournamentSection'
import TournamentListDropdown from './Tournaments/TournamentListDropdown';
import { useState, useEffect, useContext } from 'react';
import useViewPort from './Utils/useViewport';
import { useParams } from 'react-router-dom';
import { LoadedTournamentsContext } from '../contexts/LoadedTournamentsContext';
import ReactLoading from 'react-loading'
import TournamentPlaceholder from './Utils/TournamentPlaceholder';

const MainContent = ({ tournaments, currentTournament, gameFilter}) => {
  const { tournamentId } = useParams()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { width } = useViewPort()
  const { isLoading } = useContext(LoadedTournamentsContext)
  const useMobileSidebar = width < 1150

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
      {(currentTournament && !dropdownOpen && !isLoading) && <TournamentSection tournament={currentTournament} />}
      {!isLoading && !currentTournament && <TournamentPlaceholder />}
      {isLoading && <StyledLoading isMobile={useMobileSidebar}><ReactLoading type='spin' width='5%' /></StyledLoading>}
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

const StyledLoading = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${props => props.isMobile && `
    height: 80vh
  `}
`