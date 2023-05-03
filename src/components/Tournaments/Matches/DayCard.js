import React from 'react'
import styled from 'styled-components';
import moment from 'moment';

const DayCard = ({ day, date }) => {

  const m = moment(date)
  const formattedDate = m.format('dddd, MMMM Do')
  if (formattedDate === 'Invalid date') return

  return (
    <StyledDayCard>
      {formattedDate}
    </StyledDayCard>
  )
}

const StyledDayCard = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(211, 211, 211, 0.1);
  font-size: 1.1rem;
  font-weight: 500;
  padding: 2rem 0 1rem 1rem;
`

export default DayCard