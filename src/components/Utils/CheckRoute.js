import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { TournamentsContext } from '../../contexts/TournamentsContext'
import { Outlet } from 'react-router-dom'
import Home from '../pages/Home'
import MatchPage from '../pages/MatchPage'

const CheckRoute = ({ type }) => {
  const { gameType, tournamentId, matchId, vodNumber } = useParams()
  const tournaments = useContext(TournamentsContext)
  const allowedGameTypes = ['leagueoflegends', 'dota2', 'rocketleague', 'counterstrike', 'valorant']

  const findMatch = () => {
    if (!tournaments) return false
    const tournament = tournaments.find(t => t._id === tournamentId)
    if (!tournament) return false
    const matches = tournament.matchBuckets.reduce((accum, bucket) => [...bucket.matches, ...accum], [])
    return matches.find(m => m._id === matchId)
  }

  const gameTypeValid = allowedGameTypes.includes(gameType)
  const tournamentIdValid = tournaments?.find(t => t._id === tournamentId)
  const matchIdValid = findMatch()
  const vodNumberValid = matchIdValid?.matchData?.bestOf > Number(vodNumber) && Number(vodNumber) >= 0

  const types = {
    game: gameTypeValid,
    tournament: tournamentIdValid,
    vod: tournamentIdValid && matchIdValid && vodNumberValid,
  }

  const checkTypeValid = types[type]
  return (
    <>
      {!checkTypeValid && tournaments && <Navigate to={'/'} />}
      {checkTypeValid && type === 'game' && <Home />}
      {checkTypeValid && type === 'vod' && <MatchPage /> }
    </>
  )
}

export default CheckRoute