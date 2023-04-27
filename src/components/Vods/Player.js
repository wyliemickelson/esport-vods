import React from 'react'
import { useRef, useContext } from 'react'
import PlayerControls from './PlayerControls';
import YouTube from 'react-youtube';
import styled from 'styled-components';
import { PlayerContext } from '../../contexts/PlayerContext';
import TwitchEmbed from './TwitchEmbed';

const Player = ({ vod, match }) => {
  const Player = useRef()
  const { setIsPaused } = useContext(PlayerContext)

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
              Player.current?.setQuality('chunked')
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
      <PlayerControls controls={controls[type]} match={match} />
    </StyledPlayer>

  )
}

const StyledPlayer = styled.div`
  /* width: 90%;
  margin: 0 auto;
  margin-top: 2rem; */
`

const PlayerWrapper = styled.div`
    max-height: 85vh;
    overflow: hidden;
  > div {
    box-sizing: content-box;
    max-height: 85vh;
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    overflow: hidden;
  }
  iframe {
    max-height: 85vh;
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
`

export default Player