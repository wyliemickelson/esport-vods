import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { CurrentTournamentContext } from '../../contexts/CurrentTournamentContext'
import { useContext } from 'react'
import NavBar from '../Nav/NavBar'
import VodError from '../Vods/VodError'
import Player from '../Vods/Player'
import PlayerContextProvider from '../../contexts/PlayerContext'
import MatchPageDetails from '../Vods/MatchPageDetails'

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
    <PlayerContextProvider>
      <NavBar />
      { vod && vod.working ? <Player vod={vod} match={match} /> : <VodError vod={vod} />}
      <MatchPageDetails match={match} />
    </PlayerContextProvider>
  )
}

export default MatchPage