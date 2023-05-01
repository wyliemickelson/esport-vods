import React from 'react'
import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const TournamentsDetailsContext = createContext()

const TournamentsDetailsContextProvider = ({ children }) => {
  const [tournaments, setTournaments] = useState(null)

  useEffect(() => {
    axios.get('/api/tournaments')
      .then(res => res.data)
      .then(tournaments => setTournaments(tournaments))
      .catch(e => console.error(e))
  }, [])

  return (
    <TournamentsDetailsContext.Provider value={tournaments}>
      {children}
    </TournamentsDetailsContext.Provider>
  )
}

export default TournamentsDetailsContextProvider