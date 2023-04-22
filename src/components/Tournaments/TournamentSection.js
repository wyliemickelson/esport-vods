import React from 'react'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import MatchList from './Matches/MatchList';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';

const TournamentSection = ({ tournament, hideVodLists }) => {
  const [currentBucket, setCurrentBucket] = useState(0)

  useEffect(() => {
    setCurrentBucket(0)
  }, [tournament])

  const buckets = tournament.matchBuckets
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
          <Dropdown
            className='dropdown'
            options={options}
            onChange={(e) => setCurrentBucket(e.value)}
            value={options[currentBucket]}
          />
          <MatchList
            matchBucket={buckets[currentBucket]}
            gameType={tournament.details.gameType}
            hideVodLists={hideVodLists}
          />
        </>
      }
    </StyledTournamentSection>
  )
}

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

export default TournamentSection