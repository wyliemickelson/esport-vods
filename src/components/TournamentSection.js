import styled from 'styled-components';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';
import { useState, useEffect } from 'react';
import TournamentMatchBucket from './TournamentMatchBucket';

const TournamentSection = ({ tournament }) => {
  const [currentBucket, setCurrentBucket] = useState(0)
  const buckets = tournament.matchBuckets

  useEffect(() => {
    setCurrentBucket(0)
  }, [tournament])

  const options = buckets.map((bucket, i) => {
    return {
      value: i,
      label: bucket.title,
    }
  })

  return (
    <StyledTournamentSection>
      {currentBucket < buckets.length &&
        <>
          <Dropdown className='dropdown' options={options} onChange={(e) => setCurrentBucket(e.value)} value={options[currentBucket]} />
          <TournamentMatchBucket bucket={buckets[currentBucket]} gameType={tournament.details.gameType} />
        </>
      }
    </StyledTournamentSection>
  )
}

export default TournamentSection

const StyledTournamentSection = styled.section`
  width: 100%;

  .dropdown {
    z-index: 1;
    max-width: 200px;
  }
`