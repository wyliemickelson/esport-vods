import React from 'react'
import { useRef, useContext } from 'react'
import PlayerControls from './PlayerControls';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import { PlayerPausedContext } from '../../contexts/PlayerPausedContext';
import TwitchEmbed from './TwitchEmbed';

const Player = ({ vod }) => {
  const Player = useRef()
  const { setIsPaused } = useContext(PlayerPausedContext)

  let src = new URL(vod.url)
  const start = src.searchParams.get('t') ?? 0
  const type = src.origin.includes('twitch') ? 'twitch' : 'youtube'

  const controls = {
    twitch: {
      play: () => Player.current?.play(),
      pause: () => Player.current?.pause(),
      seek: (seconds) => Player.current?.seek(Player.current?.getCurrentTime() + seconds),
      fullscreen: () => requestFullScreen(),
      setVolume: (newVolume) => Player.current?.setVolume(newVolume),
    },
    youtube: {
      play: () => Player.current?.playVideo(),
      pause: () => Player.current?.pauseVideo(),
      seek: (seconds) => Player.current?.seekTo(Player.current?.getCurrentTime() + seconds),
      fullscreen: () => requestFullScreen(),
      setVolume: (newVolume) => Player.current?.setVolume(newVolume * 100),
    }
  }

  function requestFullScreen() {
    // Supports most browsers and their versions.
    const element = document.querySelector('#playerwrapper iframe')
    var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
    if (requestMethod) { // Native full screen.
        requestMethod.call(element);
    }
}

  return (
    <StyledPlayer>
      <PlayerWrapper id='playerwrapper'>
        {type === 'twitch' &&
          <TwitchEmbed
            vod={vod}
            onVideoReady={e => {
              Player.current = e
            }}
          />
        }
        {type === 'youtube' &&
          <YouTube
            videoId={vod.videoId}
            onReady={(e) => {
              Player.current = e.target
              Player.current.setVolume(50)
            }}
            onStateChange={(e) => {
              if (e.data === 1) setIsPaused(false)
              if (e.data === 2) setIsPaused(true)
            }}
            opts={{
              width: '100%',
              height: '',
              start,
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
  max-width: 1500px;
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