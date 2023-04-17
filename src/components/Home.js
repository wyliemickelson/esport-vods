import styled from 'styled-components'
import { useState } from 'react'
import GameList from './GameList'
import TournamentSection from './TournamentSection'
import EventSidebar from './EventSidebar'
import TournamentMatchBucket from './TournamentMatchBucket'

const Home = ({ tournaments }) => {
  const [currentGame, setCurrentGame] = useState(null)
  const [currentTournamentId, setCurrentTournamentId] = useState(null)
  const shownTournaments = currentGame ? tournaments.filter(t => t.details.gameType === currentGame) : tournaments

  const handleGameClick = () => {
    setCurrentTournamentId(null)
  }

  return (
    <StyledHome>
      <header>
        <GameList setCurrentGame={setCurrentGame} />
      </header>
      <div className='data'>
        <EventSidebar tournaments={shownTournaments} setCurrentTournamentId={setCurrentTournamentId} />
        {currentTournamentId && tournaments.length > 0 && <TournamentSection tournament={tournaments.find(t => t._id === currentTournamentId)} />}
      </div>
      <footer>

      </footer>
    </StyledHome>
  )
}

export default Home

const StyledHome = styled.section`
  .data {
    display: flex;
  }

  header {
    width: 90%;
    margin: 0 auto;
  }
`