import React from 'react'
import { useRef } from 'react'
import { TwitchEmbed } from 'react-twitch-embed'
import PlayerControls from './PlayerControls';
import YouTube from 'react-youtube';
import styled from 'styled-components';

const Player = ({ vod }) => {
  const Player = useRef()

  let src = new URL(vod.url)
  const startTime = src.searchParams.get('t') ?? 0
  const type = src.origin.includes('twitch') ? 'twitch' : 'youtube'

  const controls = {
    twitch: {
      play: () => Player.current?.play(),
      pause: () => Player.current?.pause(),
      seek: (seconds) => Player.current?.seek(Player.current?.getCurrentTime() + seconds),
    },
    youtube: {
      play: () => Player.current?.playVideo(),
      pause: () => Player.current?.pauseVideo(),
      seek: (seconds) => Player.current?.seekTo(Player.current?.getCurrentTime() + seconds),
    }
  }

  return (
    <StyledPlayer>
      <PlayerWrapper>
        {type === 'twitch' &&
          <TwitchEmbed
            video={vod.videoId}
            onVideoReady={(e) => Player.current = e }
            autoplay={false}
            hideControls={true}
            time={startTime}
            width='100%'
            height=''
          />
        }
        {type === 'youtube' &&
          <YouTube
            videoId={vod.videoId}
            onReady={(e) => Player.current = e.target}
            opts={{
              width: '100%',
              height: '',
              playerVars: {
                autoplay: false,
                controls: 0,
              }
            }} />
        }
      </PlayerWrapper>
      <PlayerControls controls={controls[type]} />
    </StyledPlayer>

  )
}

const StyledPlayer = styled.div`
  max-width: 1250px;
  width: 90%;
  margin: 0 auto;
  margin-top: 2rem;
`

const PlayerWrapper = styled.div`
  > div {
    border: 10px solid var(--bg-color-dark);
    border-radius: 0.5rem;
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 55%;
  }
  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
`

export default Player