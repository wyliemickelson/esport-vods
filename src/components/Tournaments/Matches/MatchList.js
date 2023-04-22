import React from 'react'
import styled from 'styled-components';
import MatchCard from './MatchCard';

const MatchList = ({ matchBucket, gameType, hideVodLists }) => {
  
  return (
    <StyledMatchList>
      {matchBucket.matches.map(match => 
        <MatchCard
          key={match._id}
          match={match}
          gameType={gameType}
          hideVodLists={hideVodLists}
        />  
      )}
    </StyledMatchList>
  )
}

const StyledMatchList = styled.div`
  padding: 1rem;
  .divider {
    height: 30px;
    margin: 0 1rem;
    border-left: 1px solid rgba(211, 211, 211, 0.2);
  }
`

export default MatchList