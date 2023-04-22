import React from 'react'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import MainContent from './MainContent';
import NavBar from './Nav/NavBar';
import useViewPort from './Utils/useViewport';

const Home = ({ tournaments }) => {
  const [currentTournament, setCurrentTournament] = useState(null)
  const [gameFilter, setGameFilter] = useState(null)

  const shownTournaments = gameFilter ? tournaments.filter(t => t.details.gameType === gameFilter) : tournaments

  const { width } = useViewPort()
  const useMobileSidebar = width < 1050
  const hideVodLists = width < 750
  const mobileNav = width < 600

  useEffect(() => {
    if (!shownTournaments.find(t => t._id === currentTournament?._id)) {
      setCurrentTournament(gameFilter ? shownTournaments[0] : null)
    }
  }, [gameFilter, shownTournaments, currentTournament, tournaments])

  return (
    <StyledHome>
      <NavBar setGameFilter={setGameFilter} isMobile={mobileNav} />
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