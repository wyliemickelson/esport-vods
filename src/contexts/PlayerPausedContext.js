import React from 'react'
import { createContext, useState } from 'react'

export const PlayerPausedContext = createContext()

const PlayerPausedContextProvider = ({ children }) => {
  const [isPaused, setIsPaused] = useState(true)

  return (
    <PlayerPausedContext.Provider value={{ isPaused, setIsPaused }}>
      {children}
    </PlayerPausedContext.Provider>
  )
}

export default PlayerPausedContextProvider