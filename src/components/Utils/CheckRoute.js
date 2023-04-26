import React from 'react'
import { useParams, Navigate} from 'react-router-dom'
import { useContext } from 'react'
import Home from '../pages/Home'
import MatchPage from '../pages/MatchPage'
import CurrentTournamentContextProvider from '../../contexts/CurrentTournamentContext'
import { TournamentsDetailsContext } from '../../contexts/TournamentsDetailsContext'
import { LoadedTournamentsContext } from '../../contexts/LoadedTournamentsContext'

const CheckRoute = ({ type }) => {
  const { gameType, tournamentId, matchId, vodNumber } = useParams()
  const tournaments = useContext(TournamentsDetailsContext)
  const { loadedTournaments, isLoading } = useContext(LoadedTournamentsContext)
  const allowedGameTypes = ['leagueoflegends', 'dota2', 'rocketleague', 'counterstrike', 'valorant']

  const gameTypeValid = () => allowedGameTypes.includes(gameType)
  const tournamentIdValid = () => tournaments && tournaments.find(t => t._id === tournamentId)
  const matchIdValid = () => {
    if (isLoading || !tournaments) return false
    const currentTournament = loadedTournaments.find(t => t._id === tournamentId)
    if (!currentTournament) return false
    const matches = currentTournament.matchBuckets.reduce((accum, bucket) => [...bucket.matches, ...accum], [])
    return matches.find(m => m._id === matchId)
  }
  const vodNumberValid = () => matchIdValid().matchData.bestOf > Number(vodNumber) && Number(vodNumber) >= 0

  const checkTypeValid = () => {
    if (type === 'game') return gameTypeValid()
    if (type === 'tournament') return tournamentIdValid()
    if (type === 'vod') return tournamentIdValid() && matchIdValid() && vodNumberValid()
  }

  return (
    <CurrentTournamentContextProvider>
      {!checkTypeValid() && tournaments && !isLoading && <Navigate replace to={'/'} />}
      {checkTypeValid() && type === 'game' && <Home />}
      {checkTypeValid() && type === 'vod' && <MatchPage />}
    </CurrentTournamentContextProvider>
  )
}

export default CheckRoute