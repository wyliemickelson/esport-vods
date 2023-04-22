import styled from 'styled-components';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';
import { useState, useEffect } from 'react';
import TournamentMatchBucket from './TournamentMatchBucket';

const TournamentSection = ({ tournament, hiddenVods }) => {
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
          <TournamentMatchBucket bucket={buckets[currentBucket]} gameType={tournament.details.gameType} hiddenVods={hiddenVods} />
        </>
      }
    </StyledTournamentSection>
  )
}

export default TournamentSection

const StyledTournamentSection = styled.section`
  width: 100%;

  .dropdown {
    margin-left: 1rem;
    margin-top: 1rem;
    z-index: 1;
    max-width: 250px;

    .Dropdown-control, .Dropdown-menu {
      border: 1px solid rgba(211, 211, 211, 0.2);
    }

    .Dropdown-option {
      border-bottom: 1px solid rgba(211, 211, 211, 0.2);
      border-right: 1px solid rgba(211, 211, 211, 0.2);
    } 
    * {
      background-color: var(--bg-color-dark-alt);
      color: var(--text-color-2);
    }
  }
`