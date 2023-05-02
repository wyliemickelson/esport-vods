import React from 'react'
import MatchInfo from '../Tournaments/Matches/MatchInfo'
import styled from 'styled-components';
import { useContext } from 'react';
import { CurrentTournamentContext } from '../../contexts/CurrentTournamentContext';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const MatchPageDetails = ({ match }) => {
  const { currentTournament } = useContext(CurrentTournamentContext)
  let { gameType, tournamentId, matchId, vodNumber } = useParams()

  var specials = /[^A-Za-z 0-9]/g;
  const urlTitle = currentTournament.details.title.replaceAll(specials, '').replaceAll(' ', '-')
  vodNumber = Number(vodNumber)
  const hasPrev = vodNumber - 1 < match?.matchData?.bestOf && vodNumber - 1 >= 0
  const hasNext = vodNumber + 1 < match?.matchData?.bestOf

  const prevLink = `/${gameType}/vods/${tournamentId}/${matchId}/${vodNumber - 1}`
  const nextLink = `/${gameType}/vods/${tournamentId}/${matchId}/${vodNumber + 1}`

  return (
    <DetailsContainer>
      <StyledDetails>
        <Link to={`/${gameType}/${tournamentId}/${urlTitle}`}>
          <h3>{currentTournament.details.title}</h3>
        </Link>
        <MatchInfo match={match} extraStyles={`justify-content: center;`} noCheckBox />
        <LinkContainer>
          {hasPrev && <Link to={prevLink}><h3>{'<'}</h3></Link>}
          <h3>Game {vodNumber + 1}/{match.matchData.bestOf}</h3>
          {hasNext && <Link to={nextLink}><h3>{'>'}</h3></Link>}
        </LinkContainer>
      </StyledDetails>
    </DetailsContainer>
  )
}

const DetailsContainer = styled.div`
  padding-bottom: 5vh;
  margin: 2rem auto;
  text-align: center;
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

  @media screen and (min-width: 825px) {
    > :first-child, >:last-child {
      width: 30%;
    }

    flex-direction: row;
    max-width: 1200px;
    justify-content: space-evenly;
    column-gap: 3%;
  }
`

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 1rem;
  justify-content: center;
  text-align: center;
  a {
    padding: 0.5rem;
  }
`

export default MatchPageDetails