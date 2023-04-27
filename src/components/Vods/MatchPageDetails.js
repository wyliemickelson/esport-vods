import React from 'react'
import MatchInfo from '../Tournaments/Matches/MatchInfo'
import styled from 'styled-components';
import { useContext } from 'react';
import { CurrentTournamentContext } from '../../contexts/CurrentTournamentContext';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const MatchPageDetails = ({ match }) => {
  const currentTournament = useContext(CurrentTournamentContext)
  const { tournamentId, matchId, vodNumber } = useParams()

  const nextLink = Number(vodNumber) + 1 < match?.matchData?.bestOf
    ? `/vods/${tournamentId}/${matchId}/${Number(vodNumber) + 1}`
    : `/${currentTournament.details.gameType}/${tournamentId}/${currentTournament.details.title.replaceAll(' ', '-')}`

  const linkText = Number(vodNumber) + 1 < match?.matchData?.bestOf
    ? 'Next'
    : 'Return to Event'

  return (
    <DetailsContainer>
      <StyledDetails>
        <h3>{currentTournament.details.title}</h3>
        <MatchInfo match={match} extraStyles={`justify-content: center;`} />
        <LinkContainer>
          <h3>Game {Number(vodNumber) + 1}/{match.matchData.bestOf}</h3>
          <Link to={nextLink}><h3>{linkText}</h3></Link>
        </LinkContainer>
      </StyledDetails>
    </DetailsContainer>
  )
}

const DetailsContainer = styled.div`
  padding-bottom: 5vh;
  margin: 2rem auto;
`

const StyledDetails = styled.div`
  background-color: var(--bg-color-dark);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1750px;
  padding: 2rem;
  width: fit-content;
  margin: 0 auto;
  row-gap: 2rem;
  width: 90%;

  @media screen and (min-width: 800px) {
    > :first-child, >:last-child {
      width: 30%;
    }

    flex-direction: row;
    max-width: 1200px;
    justify-content: space-evenly;
    column-gap: 2rem;
  }
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  justify-content: flex-end;
`

export default MatchPageDetails