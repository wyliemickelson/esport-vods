import React, { useEffect } from 'react'
import { createContext, useState } from 'react'

export const UserDataContext = createContext()

const UserDataContextProvider = ({ children }) => {
  const [userRevealedIds, setUserRevealedIds] = useState([])
  const [userWatchedIds, setUserWatchedIds] = useState([])

  const addUserId = (newId, type) => {
    console.log('add')
    if (type === 'revealed') setUserRevealedIds([...userRevealedIds, newId])
    if (type === 'watched') setUserWatchedIds([...userWatchedIds, newId])
  }

  const removeUserId = (removedId, type) => {
    if (type === 'revealed') setUserRevealedIds(userRevealedIds.filter(id => id !== removedId))
    if (type === 'watched') setUserWatchedIds(userWatchedIds.filter(id => id !== removedId))
  }

  useEffect(() => {
    localStorage.clear() // remove in production
    const savedRevealedIds = JSON.parse(localStorage.getItem('userRevealedIds'))
    const savedWatchedIds = JSON.parse(localStorage.getItem('userWatchedIds'))
    setUserRevealedIds(savedRevealedIds ?? [])
    setUserWatchedIds(savedWatchedIds ?? [])
  }, [])

  useEffect(() => {
    localStorage.setItem('userRevealedIds', JSON.stringify(userRevealedIds))
    localStorage.setItem('userWatchedIds', JSON.stringify(userWatchedIds))
    console.log('userRevealed', userRevealedIds)
    console.log('userWatched', userWatchedIds)
  }, [userRevealedIds, userWatchedIds])

  return (
    <UserDataContext.Provider value={{ userRevealedIds, userWatchedIds, addUserId, removeUserId }}>
      {children}
    </UserDataContext.Provider>
  )
}

export default UserDataContextProvider