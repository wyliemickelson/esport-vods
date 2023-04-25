import React from 'react'
import { useContext } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';
import MainContent from '../MainContent';
import NavBar from '../Nav/NavBar';
import { TournamentsContext } from '../../contexts/TournamentsContext';

const Home = () => {
  const { gameType: gameFilter, tournamentId } = useParams()
  const tournaments = useContext(TournamentsContext)
  const currentTournament = tournaments?.find(t => t._id === tournamentId)
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