import React from 'react'
import styled from 'styled-components';
import VodFrame from './VodFrame';

const VodPage = ({ vod }) => {

  const getType = () => {
    const url = new URL(vod.url)
    if (url.origin.includes('twitch')) return 'twitch'
    return 'youtube'
  }

  return (
    <StyledVodPage>
      <VodFrame vod={vod} type={getType()} />
    </StyledVodPage>
  )
}

const StyledVodPage = styled.section`
`

export default VodPage