import React from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { TournamentsContext } from '../../contexts/TournamentsContext'
import { Outlet } from 'react-router-dom'

const CheckRoute = ({ type }) => {
  const { gameType, tournamentId } = useParams()
  const tournaments = useContext(TournamentsContext)
  const tournamentsLoaded = tournaments.length > 0
  const allowedGameTypes = ['leagueoflegends', 'dota2', 'rocketleague', 'counterstrike', 'valorant']

  const gameTypeValid = allowedGameTypes.includes(gameType)
  const tournamentIdValid = tournaments.find(t => t._id === tournamentId)

  const checkTypeValid = type === 'game' ? gameTypeValid : type === 'tournament' ? tournamentIdValid : false
  return (
    <>
      <Outlet />
      {!checkTypeValid && tournamentsLoaded && <Navigate to={'/'} />}
    </>
  )
}

export default CheckRoute