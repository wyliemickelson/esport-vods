import React from 'react'
import styled from 'styled-components';
import { useEffect, useContext } from 'react';
import MatchList from './Matches/MatchList';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';
import { useParams } from 'react-router-dom';
import { CurrentTournamentContext } from '../../contexts/CurrentTournamentContext';

const TournamentSection = () => {
  const { tournamentId } = useParams()
  const { currentTournament, bucketIndex, setBucketIndex } = useContext(CurrentTournamentContext)

  useEffect(() => {
    if (tournamentId === currentTournament._id) return
    setBucketIndex(0)
  }, [tournamentId, setBucketIndex, currentTournament])

  const buckets = currentTournament.matchBuckets
  const options = buckets?.map((bucket, i) => {
    return {
      value: i,
      label: bucket.title,
    }
  })

  return (
    <StyledTournamentSection>
      {bucketIndex < buckets?.length &&
        <>
          <Dropdown
            className='dropdown'
            options={options}
            onChange={(e) => setBucketIndex(e.value)}
            value={options[bucketIndex]}
          />
          <MatchList
            matchBucket={buckets[bucketIndex]}
            gameType={currentTournament.details.gameType}
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
      background-color: var(--bg-color-dark);
      color: var(--text-color-2);
    }
  }
`

export default TournamentSection