import React from 'react'
import TournamentSideBar from './TournamentSideBar'
import { useState } from 'react'
import TournamentCard from './TournamentCard'

const TournamentListDropdown = ({ tournaments, currentTournament, setCurrentTournament }) => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => setOpen(!open)

  return (
    <>
      {currentTournament &&
        <TournamentCard
          extraStyles={`
            position: sticky;
            z-index: 5;
            top: 61px;
          `}
          tournament={currentTournament} 
          onClick={toggleOpen}
        />
      }
      {open && 
        <TournamentSideBar
          isMobile={true}
          eventClick={toggleOpen}
          tournaments={tournaments}
          currentTournament={currentTournament}
          setCurrentTournament={setCurrentTournament}
        />}
    </>
  )
}

export default TournamentListDropdown