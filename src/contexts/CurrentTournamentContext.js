import React, { useContext } from 'react'
import { createContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { LoadedTournamentsContext } from './LoadedTournamentsContext'
import axios from 'axios'

export const CurrentTournamentContext = createContext()

const CurrentTournamentContextProvider = ({ children }) => {
  const [currentTournament, setCurrentTournament] = useState(null)
  const [currentMatchId, setCurrentMatchId] = useState(null)
  const [bucketIndex, setBucketIndex] = useState(0)
  const { tournamentId, matchId } = useParams()
  const { loadedTournaments, setLoadedTournaments, setIsLoading } = useContext(LoadedTournamentsContext)

  useEffect(() => {
    if (currentTournament?._id !== tournamentId) setCurrentMatchId(null)
    if (matchId) setCurrentMatchId(matchId)
  }, [matchId, tournamentId, currentTournament])
  
  useEffect(() => {
    const newCurrentTournament = loadedTournaments?.find(t => t._id === tournamentId)
    if (!newCurrentTournament && tournamentId) {
      setIsLoading(true)
      axios.get(`http://localhost:3001/api/tournaments/${tournamentId}`)
        .then(res => res.data)
        .then(tournament => {
          setLoadedTournaments([...loadedTournaments, ...tournament])
          setCurrentTournament(...tournament)
          setIsLoading(false)
        })
    } else {
      setCurrentTournament(newCurrentTournament)
    }
  }, [tournamentId, loadedTournaments, setLoadedTournaments, setIsLoading])

  return (
    <CurrentTournamentContext.Provider value={{ currentTournament, bucketIndex, setBucketIndex, currentMatchId }}>
      {children}
    </CurrentTournamentContext.Provider>
  )
}

export default CurrentTournamentContextProvider