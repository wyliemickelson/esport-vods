import styled from 'styled-components';

const VodList = ({ bestOf, mapData }) => {
  const paddedMaps = Array.from({ ...mapData, length: bestOf })
  return (
    <StyledVodList>
      <p>Game</p>
      <div>
        {paddedMaps.map((map, i) => 
          <a key={map?._id || i} href={map?.vod?.url} target='_blank' rel='noreferrer' >{i + 1}</a>
        )}
      </div>
    </StyledVodList>
  )
}

export default VodList

const StyledVodList = styled.div`
  display: flex;
  color: var(--text-color-2);

  line-height: 3;
  a {
    padding: 1rem 0.7rem;
  }
  p {
    font-weight: 500;
    padding-right: 1rem;
    text-transform: uppercase;
  }

`