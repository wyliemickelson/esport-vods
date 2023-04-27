import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { CurrentTournamentContext } from '../../contexts/CurrentTournamentContext'
import { useContext } from 'react'
import NavBar from '../Nav/NavBar'
import VodPlaceholder from '../Vods/VodPlaceholder'
import Player from '../Vods/Player'

const MatchPage = () => {
  const { tournamentId, matchId, vodNumber } = useParams()
  const currentTournament = useContext(CurrentTournamentContext)

  const findMatch = () => {
    const matches = currentTournament?.matchBuckets?.reduce((accum, bucket) => [...bucket.matches, ...accum], [])
    return matches?.find(m => m._id === matchId)
  }

  const match = findMatch()
  const vod = match?.matchData?.mapData[vodNumber]?.vod

  return (
    <>
      <NavBar />
      { vod ? <Player vod={vod} /> : <VodPlaceholder />}
      {Number(vodNumber) + 1 < match?.matchData?.bestOf && <Link to={`/vods/${tournamentId}/${matchId}/${Number(vodNumber) + 1}`}>Next Game</Link>}
    </>
  )
}

export default MatchPage