import { all } from 'axios'
import React from 'react'
import { useParams, Navigate } from 'react-router-dom'

const CheckGameRoute = () => {
  const { gameType } = useParams()
  const allowedTypes = ['leagueoflegends', 'dota2', 'rocketleague', 'counterstrike', 'valorant']
  return allowedTypes.includes(gameType) ? <></> : <Navigate to={'/'} />
}

export default CheckGameRoute