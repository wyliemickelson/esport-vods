import styled from 'styled-components';
import VodList from './VodList';
import Team from './Team';
import { useState } from 'react';

const TournamentMatchBucket = ({ bucket, gameType, hiddenVods }) => {
  return (
    <StyledTournamentMatchBucket>
      {bucket.matches.map(m => {
        return <MatchCard hiddenVods={hiddenVods} key={m._id} m={m} gameType={gameType} />
      }
      )}
    </StyledTournamentMatchBucket>
  )
}

const MatchCard = ({ m, gameType, hiddenVods }) => {
  const [showMobileVods, setShowMobileVods] = useState(false)

  const team1 = m.matchData?.team1
  const team2 = m.matchData?.team2

  const fillerTeam = {
    name: 'TBD',
    logoSrc: `game-icons/${gameType}.svg`
  }

  return (
    <>
      {
        m.isCompleted
          ? <StyledMatchCard hiddenVods={hiddenVods}>
            <StyledMatchInfo onClick={() => setShowMobileVods(!showMobileVods)}>
              <Team team={team1} side='left' />
              <p>VS</p>
              <Team team={team2} side='right' />
            </StyledMatchInfo>
            {!hiddenVods &&
              <>
                <div className='divider'></div>
                <VodList bestOf={m.matchData.bestOf} mapData={m.matchData.mapData} />
              </>}
              {showMobileVods && <VodList bestOf={m.matchData.bestOf} mapData={m.matchData.mapData} />}
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
  .divider {
    height: 30px;
    margin: 0 1rem;
    border-left: 1px solid rgba(211, 211, 211, 0.2);
  }
`

const StyledMatchInfo = styled.div`
  &:hover {
    cursor: pointer;
  }
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
  border-bottom: 1px solid rgba(211, 211, 211, 0.1);

  ${props => props.hiddenVods && `
    flex-direction: column;
  `}
`