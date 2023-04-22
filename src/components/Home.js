import styled from 'styled-components'
import { useState, useEffect } from 'react'
import TournamentSection from './TournamentSection'
import EventSidebar from './EventSidebar'
import NavBar from './NavBar'
import useViewPort from './useViewport'
import EventListDropdown from './EventListDropdown'
import MobileNav from './MobileNav'

const Home = ({ tournaments }) => {
  const [currentGame, setCurrentGame] = useState(null)
  const [currentTournamentId, setCurrentTournamentId] = useState(tournaments[0]?._id)
  const [eventDropdownOpen, setEventDropdownOpen] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const shownTournaments = currentGame ? tournaments.filter(t => t.details.gameType === currentGame) : tournaments

  const { width } = useViewPort()
  const breakpoint = 1050
  const burgerMenuBreakpoint = 600
  const isBurgerNav = width < burgerMenuBreakpoint
  const isMobile = width < breakpoint

  useEffect(() => {
    if (!shownTournaments.find(t => t._id === currentTournamentId)) {
      setCurrentTournamentId(currentGame ? shownTournaments[0]?._id : null)
    }
  }, [currentGame, shownTournaments, tournaments, currentTournamentId])

  return (
    <StyledHome isMobile={isMobile}>
      {mobileNavOpen && <MobileNav setCurrentGame={setCurrentGame} setMobileNavOpen={setMobileNavOpen} />}
      <header>
        <NavBar setCurrentGame={setCurrentGame} isMobile={isBurgerNav} setMobileNavOpen={setMobileNavOpen} />
      </header>
      <div className='main'>
        {isMobile
        ? <EventListDropdown tournaments={shownTournaments} setCurrentTournamentId={setCurrentTournamentId} currentTournamentId={currentTournamentId} eventDropdownOpen={eventDropdownOpen} setEventDropdownOpen={setEventDropdownOpen} />
        : <EventSidebar isMobile={isMobile} tournaments={shownTournaments} currentTournamentId={currentTournamentId}  setCurrentTournamentId={setCurrentTournamentId} />}
        {currentTournamentId && tournaments.length > 0 && !eventDropdownOpen && <TournamentSection tournament={tournaments.find(t => t._id === currentTournamentId)} />}
      </div>
      <footer>

      </footer>
    </StyledHome>
  )
}

export default Home

const StyledHome = styled.section`
  header {
    position: sticky;
    top: 0px;
    z-index: 5;
    background-color: var(--bg-color-dark);
  }
  .main {
    display: flex;
  }

  ${props => props.isMobile && `
    .main {
      flex-direction: column;
    }
  `}
`