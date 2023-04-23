import React from 'react'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import MainContent from '../MainContent';
import NavBar from '../Nav/NavBar';
import useViewPort from '../Utils/useViewport';
import VodPage from './VodPage';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Home = ({ tournaments }) => {
  const [currentTournament, setCurrentTournament] = useState(null)
  // const [gameFilter, setGameFilter] = useState(null)

  const { gameType: gameFilter } = useParams()



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

  const youtubeTestVod = {
    url: "https://youtu.be/Ygl9i0epe80?t=2099",
    videoId: "K_sxlIrQjnE",
    working: true,
  }
  const twitchTestVod = {
    url: "https://www.twitch.tv/videos/1556896575?t=0h59m39s",
    videoId: "1556896575",
    working: true,
  }

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
      <VodPage vod={twitchTestVod} />
    </StyledHome>
  )
}

export default Home

const StyledHome = styled.section`

`