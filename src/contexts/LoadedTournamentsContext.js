import React from 'react'
import { createContext, useState } from 'react'

export const LoadedTournamentsContext = createContext()

const LoadedTournamentsContextProvider = ({ children }) => {
  const [loadedTournaments, setLoadedTournaments] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  return (
    <LoadedTournamentsContext.Provider value={{ loadedTournaments, setLoadedTournaments, isLoading, setIsLoading }}>
      {children}
    </LoadedTournamentsContext.Provider>
  )
}

export default LoadedTournamentsContextProvider