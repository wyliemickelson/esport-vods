import React from 'react'
import styled from 'styled-components';
import MatchCard from './MatchCard';
import DayCard from './DayCard';
import moment from 'moment';

const MatchList = ({ matchBucket, gameType }) => {

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
          {dayBucket.map(match =>
            <MatchCard
              key={match._id}
              match={match}
              gameType={gameType}
            />
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