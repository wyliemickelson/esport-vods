import React from 'react'
import TournamentCard from './TournamentCard';

const TournamentList = ({ tournaments, currentTournament, setCurrentTournament, eventClick }) => {
  return (
    <div>
      {tournaments.map(t => {
        const isCurrent = currentTournament?._id === t._id
        return (
          <TournamentCard
          key={t._id}
          isCurrent={isCurrent}
          tournament={t}
          onClick={() => {
            setCurrentTournament(t)
            if (eventClick) eventClick()
          }}
          /> 
        )
      }
      )}
    </div>
  )
}

export default TournamentList