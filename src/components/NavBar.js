import styled from 'styled-components';
import React from 'react'
import BurgerIcon from './BurgerIcon';

const NavBar = ({ setCurrentGame, isMobile, setMobileNavOpen }) => {
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
    <StyledNavBar>
      {isMobile
      ? <BurgerIcon setMobileNavOpen={setMobileNavOpen} />
      : games.map(game => {
        return <StyledNavLink onClick={() => setCurrentGame(game.gameType)} key={game.name}>{game.name}</StyledNavLink>
      })
      }
    </StyledNavBar>
  )
}

export default NavBar

const StyledNavBar = styled.nav`
  display: flex;
  height: 61px;
`

const StyledNavLink = styled.a`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1rem;
`