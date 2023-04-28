import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const VodList = ({ match, revealed }) => {
  const mapData = match.matchData.mapData
  const bestOf = match.matchData.bestOf
  const { tournamentId } = useParams()
  const paddedMaps = Array.from({ ...mapData, length: bestOf })
  return (
    <StyledVodList revealed={revealed}>
      <p>Game</p>
      <div>
        {paddedMaps.map((map, i) =>
          <Link to={`/vods/${tournamentId}/${match._id}/${i}`} key={map?._id || i}>
            <span>{i + 1}</span>
          </Link>
        )}
      </div>
    </StyledVodList>
  )
}

const StyledVodList = styled.div`
  grid-column: 4;
  display: flex;
  color: var(--text-color-2);
  padding: 0.5rem;

  a {
    padding: 0.7rem;
  }

  /* span {
    padding: 0 0.7rem;
  } */
  p {
    font-weight: 500;
    padding-right: 1rem;
    text-transform: uppercase;
  }

  ${props => !props.revealed && `
    filter: blur(15px) grayscale(1);
  `}
`

export default VodList