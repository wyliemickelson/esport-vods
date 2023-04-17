import styled from 'styled-components';
import VodList from './VodList';
import Team from './Team';

const TournamentMatchBucket = ({ bucket }) => {
  return (
    <StyledTournamentMatchBucket>
      {bucket.matches.map(m => {
        return <MatchCard key={m._id} m={m} />
      }
      )}
    </StyledTournamentMatchBucket>
  )
}

const MatchCard = ({ m }) => {

  const team1 = m.matchData.team1
  const team2 = m.matchData.team2

  return (
    <StyledMatchCard>
      <StyledMatchInfo>
        <Team team={team1} side='left' />
        <p>VS</p>
        <Team team={team2} side='right' />
      </StyledMatchInfo>
      <VodList bestOf={m.matchData.bestOf} mapData={m.matchData.mapData} />
    </StyledMatchCard>
  )
}

export default TournamentMatchBucket

const StyledTournamentMatchBucket = styled.div`
  padding: 1rem;
`

const StyledMatchInfo = styled.div`
  white-space: nowrap;
  display: flex;
  column-gap: 1rem;
  align-items: center;
  justify-content: space-between;
  align-items: center;
`

const StyledMatchCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
`