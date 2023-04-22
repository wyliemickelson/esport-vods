import React from 'react'
import styled from 'styled-components';

const MobileNav = ({ setCurrentGame, setMobileNavOpen }) => {
  const games = [
    {
      src: 'assets/game-icons/lol.svg',
      name: 'LoL',
      gameType: 'leagueoflegends',
    },
    {
      src: 'assets/game-icons/dota.svg',
      name: 'Dota 2',
      gameType: 'dota2',
    },
    {
      src: 'assets/game-icons/csgo.svg',
      name: 'CSGO',
      gameType: 'counterstrike',
    },
    {
      src: 'assets/game-icons/valorant.svg',
      name: 'Valorant',
      gameType: 'valorant',
    },
    {
      src: 'assets/game-icons/rocketleague.svg',
      name: 'Rocket League',
      gameType: 'rocketleague',
    },
  ]

  return (

    <StyledMobileNav>
      <button onClick={() => setMobileNavOpen(false)}>Close</button>
      <div>
        {games.map(game => {
        return <button onClick={() => {
          setCurrentGame(game.gameType)
          setMobileNavOpen(false)
        }} key={game.name}>{game.name}</button>
      })}
      </div>
    </StyledMobileNav>
  )
}

export default MobileNav

const StyledMobileNav = styled.section`
  position: absolute;
  background-color: #1f1f1f;
  z-index: 10;
  height: 100vh;
  width: 100%;
  font-size: 1.5rem;

  div {
    display: flex;
    flex-direction: column;

    button {
      font-weight: 500;
      margin: 0.5rem 1rem;
      padding: 0.5rem;

      &:hover {
        background-color: rgba(128,128,128,.2)
      }
    }
  }
`