import React from 'react'
import { useEffect, useContext, useRef } from 'react'
import { useParams } from 'react-router-dom';
import { PlayerPausedContext } from '../../contexts/PlayerPausedContext';

const TwitchEmbed = ({ vod, onVideoReady }) => {
  const { setIsPaused } = useContext(PlayerPausedContext)
  const Player = useRef()
  const Loading = useRef(false)
  const { tournamentId, matchId, vodNumber } = useParams()

  useEffect(() => {
    console.log('test')
    Loading.current = false
    document.getElementById('player').innerHTML = ''
  }, [tournamentId, matchId, vodNumber])

  // load the player once the script loads
  useEffect(() => {
    if (Loading.current) return
    Loading.current = true
    const script = document.createElement('script');
    const EMBED_URL = 'https://embed.twitch.tv/embed/v1.js'
    script.setAttribute('src', EMBED_URL);

    script.addEventListener('load', () => {
        let src = new URL(vod.url)
        const time = src.searchParams.get('t') ?? 0
        const options = {
          video: vod.videoId,
          autoplay: false,
          controls: false,
          time: time,
        }
        Player.current = new window.Twitch.Player('player', options)
        Player.current.addEventListener(window.Twitch.Player.READY, () => {
          Player.current.addEventListener(window.Twitch.Player.PLAY, () => setIsPaused(false))
          Player.current.addEventListener(window.Twitch.Player.PAUSE, () => setIsPaused(true))
          onVideoReady(Player.current)
        })
    });
    document.body.appendChild(script);
  }, [vod, setIsPaused, onVideoReady])

  return (
      <div id='player' />
  )
}

export default TwitchEmbed