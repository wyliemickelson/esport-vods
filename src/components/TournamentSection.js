import styled from 'styled-components';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';
import { useState } from 'react';
import TournamentMatchBucket from './TournamentMatchBucket';

const TournamentSection = ({ tournament }) => {
  const [currentBucket, setCurrentBucket] = useState(0)
  const buckets = tournament.matchBuckets

  const options = buckets.map((bucket, i) => {
    return {
      value: i,
      label: bucket.title,
    }
  })


  return (
    <StyledTournamentSection>
      <h2>{tournament.details.title}</h2>
      <Dropdown options={options} onChange={(e) => setCurrentBucket(e.value)} value={options[currentBucket]} />
      <TournamentMatchBucket bucket={buckets[currentBucket]} />
    </StyledTournamentSection>
  )
}

export default TournamentSection

const StyledTournamentSection = styled.section`
  width: 100%;
`