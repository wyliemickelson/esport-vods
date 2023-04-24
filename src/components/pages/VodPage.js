import React from 'react'
import styled from 'styled-components';
import VodFrame from '../Vods/VodFrame';

const VodPage = ({ vod }) => {

  return (
    <StyledVodPage>
      <VodFrame vod={vod} />
    </StyledVodPage>
  )
}

const StyledVodPage = styled.section`
`

export default VodPage