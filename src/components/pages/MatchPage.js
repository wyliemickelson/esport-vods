import React from 'react'
import VodFrame from '../Vods/VodFrame'
import { useParams, Link } from 'react-router-dom'
import { TournamentsContext } from '../../contexts/TournamentsContext'
import { useContext } from 'react'
import NavBar from '../Nav/NavBar'
import VodPlaceholder from '../Vods/VodPlaceholder'

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
  const vod = match?.matchData.mapData[vodNumber]?.vod

  return (
    <>
      <NavBar />
      {tournaments && vod ? <VodFrame vod={vod} /> : <VodPlaceholder />}
      {Number(vodNumber) + 1 < match.matchData.bestOf && <Link to={`/vods/${tournamentId}/${matchId}/${Number(vodNumber) + 1}`}>Next Game</Link>}
    </>
  )
}

export default MatchPage