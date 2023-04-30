import React from 'react'
import styled from 'styled-components';
import MatchCard from './MatchCard';
import DayCard from './DayCard';
import moment from 'moment';
import { useContext, useRef, useEffect } from 'react';
import { CurrentTournamentContext } from '../../../contexts/CurrentTournamentContext';

const MatchList = ({ matchBucket, gameType }) => {
  const currentMatchRef = useRef(null)
  const { currentMatchId } = useContext(CurrentTournamentContext)

  useEffect(() => {
    // have to use settimeout because scrollintoview does not work with useeffect normally
    setTimeout(() => currentMatchRef.current?.scrollIntoView({
      behavior: 'auto',
      block: 'center',
      inline: 'center'
    }), 0)
  })

  const dayBuckets = () => {
    const dayBuckets = {}
    matchBucket.matches.forEach(m => {
      const currentDays = Object.keys(dayBuckets)
      const dayFormat = moment(m.dateStart).format('YYYYMMDD')
      if (currentDays.includes(dayFormat)) {
        dayBuckets[dayFormat].push(m)
      } else {
        dayBuckets[dayFormat] = [m]
      }
    })
    return Object.values(dayBuckets)
  }

  return (
    <StyledMatchList>
      {dayBuckets().map((dayBucket, i) =>
        <React.Fragment key={i}>
          <DayCard day={i + 1} date={dayBucket[0].dateStart} />
          {dayBucket.map(match => {
            const isCurrentMatch = match._id === currentMatchId
            console.log(isCurrentMatch)
            return (
              <MatchCard
                refProp={isCurrentMatch ? currentMatchRef : null}
                key={match._id}
                match={match}
                gameType={gameType}
              />
            )
          }
          )}
        </React.Fragment>
      )}
    </StyledMatchList>
  )
}

const StyledMatchList = styled.div`
  padding: 1rem;
`

export default MatchList