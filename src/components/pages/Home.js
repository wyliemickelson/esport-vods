import React from 'react'
import { useState, useEffect, useContext } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MainContent from '../MainContent';
import NavBar from '../Nav/NavBar';
import useViewPort from '../Utils/useViewport';
import { TournamentsContext } from '../../contexts/TournamentsContext';

const Home = () => {
  const navigate = useNavigate()

  const { gameType: gameFilter, tournamentId, tournamentName } = useParams()
  const [currentTournament, setCurrentTournament] = useState(null)
  const tournaments = useContext(TournamentsContext)
  const shownTournaments = tournaments?.filter(t => t.details.gameType === gameFilter) ?? []

  const { width } = useViewPort()
  const useMobileSidebar = width < 1050
  const hideVodLists = width < 750
  const mobileNav = width < 600

  // set tournament if id is given in url
  useEffect(() => {
    setCurrentTournament(tournaments?.find(t => t._id === tournamentId))
  }, [tournamentId, tournaments])

  // // change url to defaulted tournament
  // useEffect(() => {
  //   if (currentTournament) {
  //     navigate(`/${gameFilter}/${currentTournament._id}/${currentTournament.details.title.replaceAll(' ', '-')}`, { replace: true })
  //   }
  //   console.log('used')
  // }, [tournaments, currentTournament, tournamentId, gameFilter, navigate])

  // // set default tournament if no id in url
  // const setDefaultTournament = () => {
  //   if (!shownTournaments.find(t => t._id === currentTournament?._id) && tournaments.length > 0) {
  //     setCurrentTournament(shownTournaments[0])
  //   }
  // }
  // if (!tournamentId && gameFilter) setDefaultTournament()

  return (
    <StyledHome>
      <NavBar  isMobile={mobileNav} />
      <Outlet />
      <MainContent
        useMobileSidebar={useMobileSidebar}
        tournaments={shownTournaments}
        currentTournament={currentTournament}
        setCurrentTournament={setCurrentTournament}
        gameFilter={gameFilter}
        hideVodLists={hideVodLists}
      />
    </StyledHome>
  )
}

export default Home

const StyledHome = styled.section`

`