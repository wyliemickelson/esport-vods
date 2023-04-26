import React, { useContext } from 'react'
import { createContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { LoadedTournamentsContext } from './LoadedTournamentsContext'
import axios from 'axios'

export const CurrentTournamentContext = createContext()

const CurrentTournamentContextProvider = ({ children }) => {
  const [currentTournament, setCurrentTournament] = useState(null)
  const { tournamentId } = useParams()
  const { loadedTournaments, setLoadedTournaments, setIsLoading } = useContext(LoadedTournamentsContext)
  
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
    <CurrentTournamentContext.Provider value={currentTournament}>
      {children}
    </CurrentTournamentContext.Provider>
  )
}

export default CurrentTournamentContextProvider