import React from 'react'
import styled from 'styled-components';

const VodFrame = ({ vod, type }) => {

  const formatSrc = () => {
    let src = new URL(vod.url)
    const time = src.searchParams.get('t') ?? 0
    const formats = {
      youtube: `https://youtube.com/embed/${vod.videoId}?t=${time}`,
      twitch: `https://player.twitch.tv/?video=${vod.videoId}&time=${time}&autoplay=false&parent=localhost`,
    }

    return formats[type]
  }
  formatSrc()

  return (
    <FrameWrapper>
      <iframe
        title='vod'
        src={formatSrc()}
        allowFullScreen='allowFullScreen'
        frameBorder="0"
      />
    </FrameWrapper>
  )
}

// keeps aspect ratio 16/9
const FrameWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export default VodFrame