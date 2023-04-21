import styled from 'styled-components';
import VodList from './VodList';
import Team from './Team';

const TournamentMatchBucket = ({ bucket, gameType }) => {
  return (
    <StyledTournamentMatchBucket>
      {bucket.matches.map(m => {
        return <MatchCard key={m._id} m={m} gameType={gameType} />
      }
      )}
    </StyledTournamentMatchBucket>
  )
}

const MatchCard = ({ m, gameType }) => {
  const team1 = m.matchData?.team1
  const team2 = m.matchData?.team2

  const fillerTeam = {
    name: 'TBD',
    logoSrc:`game-icons/${gameType}.svg`
  }

  return (
    <>
      {
        m.isCompleted
          ? <StyledMatchCard>
            <StyledMatchInfo>
              <Team team={team1} side='left' />
              <p>VS</p>
              <Team team={team2} side='right' />
            </StyledMatchInfo>
            <VodList bestOf={m.matchData.bestOf} mapData={m.matchData.mapData} />
          </StyledMatchCard>
          : <StyledMatchCard>
              <StyledMatchInfo>
              <Team team={fillerTeam} side='left' />
              <p>VS</p>
              <Team team={fillerTeam} side='right' />
            </StyledMatchInfo>
          </StyledMatchCard>
      }
    </>
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