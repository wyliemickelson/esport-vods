import styled from 'styled-components'
import { useState, useEffect } from 'react'
import TournamentSection from './TournamentSection'
import EventSidebar from './EventSidebar'
import NavBar from './NavBar'

const Home = ({ tournaments }) => {
  const [currentGame, setCurrentGame] = useState(null)
  const [currentTournamentId, setCurrentTournamentId] = useState(tournaments[0]?._id)
  const shownTournaments = currentGame ? tournaments.filter(t => t.details.gameType === currentGame) : tournaments

  useEffect(() => {
    if (!shownTournaments.find(t => t._id === currentTournamentId)) {
      setCurrentTournamentId(currentGame ? shownTournaments[0]?._id : null)
    }
  }, [currentGame, shownTournaments, tournaments, currentTournamentId])

  return (
    <StyledHome>
      <header>
        <NavBar setCurrentGame={setCurrentGame} />
      </header>
      <div className='main'>
        <EventSidebar tournaments={shownTournaments} currentTournamentId={currentTournamentId}  setCurrentTournamentId={setCurrentTournamentId} />
        {currentTournamentId && tournaments.length > 0 && <TournamentSection tournament={tournaments.find(t => t._id === currentTournamentId)} />}
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

`