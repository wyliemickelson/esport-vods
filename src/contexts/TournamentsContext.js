import React from 'react'
import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const TournamentsContext = createContext()

const TournamentsContextProvider = ({ children }) => {
  const [tournaments, setTournaments] = useState([])

  useEffect(() => {
    axios.get('/api/tournaments')
      .then(res => res.data)
      .then(tournaments => setTournaments(tournaments))
      .catch(e => console.error(e))
  }, [])

  return (
    <TournamentsContext.Provider value={tournaments}>
      {children}
    </TournamentsContext.Provider>
  )
}

export default TournamentsContextProvider