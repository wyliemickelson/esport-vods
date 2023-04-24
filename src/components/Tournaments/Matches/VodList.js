import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const VodList = ({ match }) => {
  const mapData = match.matchData.mapData
  const bestOf = match.matchData.bestOf
  const { tournamentId, tournamentTitle } = useParams()
  const paddedMaps = Array.from({ ...mapData, length: bestOf })
  return (
    <StyledVodList>
      <p>Game</p>
      <div>
        {paddedMaps.map((map, i) =>
          <Link to={`/vods/${tournamentId}/${tournamentTitle}/${match._id}/${i}`} key={map?._id || i}>
            <span>{i + 1}</span>
          </Link>
        )}
      </div>
    </StyledVodList>
  )
}

const StyledVodList = styled.div`
  display: flex;
  color: var(--text-color-2);
  line-height: 3;

  span {
    padding: 1rem 0.7rem;
  }
  p {
    font-weight: 500;
    padding-right: 1rem;
    text-transform: uppercase;
  }
`

export default VodList