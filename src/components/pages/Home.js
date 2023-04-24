import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';
import MainContent from '../MainContent';
import NavBar from '../Nav/NavBar';
import { TournamentsContext } from '../../contexts/TournamentsContext';

const Home = () => {
  const { gameType: gameFilter, tournamentId, tournamentName } = useParams()
  const [currentTournament, setCurrentTournament] = useState(null)
  const tournaments = useContext(TournamentsContext)
  const shownTournaments = tournaments?.filter(t => t.details.gameType === gameFilter) ?? []

  // set tournament if id is given in url
  useEffect(() => {
    setCurrentTournament(tournaments?.find(t => t._id === tournamentId))
  }, [tournamentId, tournaments])

  return (
    <StyledHome>
      <NavBar />
      <Outlet />
      <MainContent
        tournaments={shownTournaments}
        currentTournament={currentTournament}
        setCurrentTournament={setCurrentTournament}
        gameFilter={gameFilter}
      />
    </StyledHome>
  )
}

export default Home

const StyledHome = styled.section`

`