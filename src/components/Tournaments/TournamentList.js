import React from 'react'
import TournamentCard from './TournamentCard';
import styled from 'styled-components';

const TournamentList = ({ tournaments, currentTournament, eventClick }) => {
  return (
    <StyledTournamentList>
      {tournaments.map(t => {
        const isCurrent = currentTournament?._id === t._id
        return (
          <TournamentCard
            key={t._id}
            isCurrent={isCurrent}
            tournament={t}
            onClick={eventClick}
          />
        )
      }
      )}
    </StyledTournamentList>
  )
}

const StyledTournamentList = styled.div`
    overflow-y: auto;
`

export default TournamentList