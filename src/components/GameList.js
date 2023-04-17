import styled from 'styled-components';

const GameList = ({ setCurrentGame }) => {

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
    <StyledGameList>
      {games.map(game => {
        const imgSrc = require(`./../${game.src}`)
        return (
          <StyledGame onClick={() => setCurrentGame(game.gameType)} key={game.name}>
            <div>
              <img src={imgSrc} alt='game icon' />
            </div>
            <p>{game.name}</p>
          </StyledGame>
        )
      }
      )}
    </StyledGameList>
  )
}

export default GameList

const StyledGameList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 1rem;
  column-gap: 1rem;
`

const StyledGame = styled.a`
&:hover {
  cursor: pointer;
}
display: flex;
flex-direction: column;
align-items: center;

div {
  width: 100px;
  height: 100px;
  margin-bottom: 0.5rem;

  img {
    padding: 0.7rem;
    border: 2px solid white;
    border-radius: 0.7rem;
    width: 100%;
    height: 100%;
  }
}
`