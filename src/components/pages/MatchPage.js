import React from 'react'
import VodFrame from '../Vods/VodFrame'
import { useParams } from 'react-router-dom'
import { TournamentsContext } from '../../contexts/TournamentsContext'
import { useContext } from 'react'

const MatchPage = () => {
  const { tournamentId, matchId, vodNumber } = useParams()
  const tournaments = useContext(TournamentsContext)

  const findMatch = () => {
    if (tournaments.length === 0) return
    const tournament = tournaments.find(t => t._id === tournamentId)
    const matches = tournament.matchBuckets.reduce((accum, bucket) => [...bucket.matches, ...accum], [])
    return matches.find(m => m._id === matchId)
  }

  const match = findMatch()
  const vod = match?.matchData.mapData[vodNumber].vod

  return (
    <>
      {tournaments.length > 0 && <VodFrame vod={vod} />}
    </>
  )
}

export default MatchPage