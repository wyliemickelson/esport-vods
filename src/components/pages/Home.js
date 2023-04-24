import React from 'react'
import styled from 'styled-components';
import { useState, useEffect, useContext } from 'react';
import MainContent from '../MainContent';
import NavBar from '../Nav/NavBar';
import useViewPort from '../Utils/useViewport';
import VodPage from './VodPage';
import { useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { TournamentsContext } from '../../contexts/TournamentsContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()

  const { gameType: gameFilter, tournamentId, tournamentName } = useParams()
  const [currentTournament, setCurrentTournament] = useState(null)
  const tournaments = useContext(TournamentsContext)
  const shownTournaments = tournaments.filter(t => t.details.gameType === gameFilter)

  const { width } = useViewPort()
  const useMobileSidebar = width < 1050
  const hideVodLists = width < 750
  const mobileNav = width < 600

  // set tournament if id is given in url
  useEffect(() => {
    if (tournamentId) {
      setCurrentTournament(tournaments.find(t => t._id === tournamentId))
    }
  }, [tournamentId, tournaments])

  // change url to defaulted tournament
  useEffect(() => {
    if (currentTournament) {
      navigate(`/${gameFilter}/${currentTournament._id}/${currentTournament.details.title.replaceAll(' ', '-')}`)
    }
  }, [currentTournament, gameFilter, navigate, tournaments])

  // set default tournament if no id in url
  const setDefaultTournament = () => {
    if (!shownTournaments.find(t => t._id === currentTournament?._id) && tournaments.length > 0) {
      setCurrentTournament(shownTournaments[0])
    }
  }
  if (!tournamentId) setDefaultTournament()


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