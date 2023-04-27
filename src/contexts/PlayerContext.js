import React from 'react'
import { createContext, useState } from 'react'

export const PlayerContext = createContext()

const PlayerContextProvider = ({ children }) => {
  const [isPaused, setIsPaused] = useState(true)

  return (
    <PlayerContext.Provider value={{ isPaused, setIsPaused }}>
      {children}
    </PlayerContext.Provider>
  )
}

export default PlayerContextProvider