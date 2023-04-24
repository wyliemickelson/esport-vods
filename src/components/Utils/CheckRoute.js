import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { TournamentsContext } from '../../contexts/TournamentsContext'
import { Outlet } from 'react-router-dom'
import Home from '../pages/Home'

const CheckRoute = ({ type }) => {
  const { gameType, tournamentId, matchId, vodNumber } = useParams()
  const tournaments = useContext(TournamentsContext)
  const tournamentsLoaded = tournaments.length > 0
  const allowedGameTypes = ['leagueoflegends', 'dota2', 'rocketleague', 'counterstrike', 'valorant']

  const findMatch = () => {
    if (tournaments.length === 0) return
    const tournament = tournaments.find(t => t._id === tournamentId)
    const matches = tournament.matchBuckets.reduce((accum, bucket) => [...bucket.matches, ...accum], [])
    return matches.find(m => m._id === matchId)
  }

  const gameTypeValid = allowedGameTypes.includes(gameType)
  const tournamentIdValid = tournaments.find(t => t._id === tournamentId)

  const types = {
    game: gameTypeValid,
    tournament: tournamentIdValid,
  }

  const checkTypeValid = types[type]
  return (
    <>
      {!checkTypeValid && tournamentsLoaded && <Navigate to={'/'} />}
      {checkTypeValid && type === 'game' && <Home />}
    </>
  )
}

export default CheckRoute