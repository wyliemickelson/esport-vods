import React from 'react'
import styled from 'styled-components';
import TournamentSideBar from './Tournaments/TournamentSideBar'
import TournamentSection from './Tournaments/TournamentSection'
import TournamentListDropdown from './Tournaments/TournamentListDropdown';

const MainContent = ({ tournaments, currentTournament, setCurrentTournament, gameFilter, useMobileSidebar, hideVodLists }) => {
  return (
    <StyledMainContent useMobileSidebar={useMobileSidebar}>
      {useMobileSidebar
        ? <TournamentListDropdown 
            tournaments={tournaments}
            currentTournament={currentTournament}
            setCurrentTournament={setCurrentTournament}
          />
        : <TournamentSideBar
            tournaments={tournaments}
            currentTournament={currentTournament}
            setCurrentTournament={setCurrentTournament}
          />
      }
      {currentTournament && <TournamentSection tournament={currentTournament} hideVodLists={hideVodLists} />}
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