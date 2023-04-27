import React from 'react'
import { useContext } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';
import MainContent from '../MainContent';
import NavBar from '../Nav/NavBar';
import { TournamentsDetailsContext } from '../../contexts/TournamentsDetailsContext';
import { CurrentTournamentContext } from '../../contexts/CurrentTournamentContext';

const Home = () => {
  const { gameType: gameFilter } = useParams()
  const tournaments = useContext(TournamentsDetailsContext)
  const currentTournament = useContext(CurrentTournamentContext)

  const shownTournaments = tournaments?.filter(t => t.details.gameType === gameFilter) ?? []

  return (
    <StyledHome>
      <NavBar />
      <Outlet />
      <MainContent
        tournaments={shownTournaments}
        currentTournament={currentTournament}
        gameFilter={gameFilter}
      />
    </StyledHome>
  )
}

export default Home

const StyledHome = styled.section`

`