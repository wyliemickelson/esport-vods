import styled from 'styled-components';

const Team = ({ team, side }) => {
  const teamImg = require(`./../assets/${team.logoSrc}`)

  const shortenName = (name) => {
    if (name.length <= 3) {
      return name
    }
    const words = name.split(' ')
    // multiple 'words'
    if (words.length > 1) {
      return name.match(/\b\w/g).join('')
    }
    // one word
    return name.slice(0, 3).toUpperCase()
  }

  return (
    <StyledTeam>
      {side === 'left'
        && <p>{shortenName(team.name)}</p>
      }
      <div className='img-container'>
        <img src={teamImg} alt='team logo' />
      </div>
      {side === 'right'
        && <p>{shortenName(team.name)}</p>
      }
    </StyledTeam>
  )
}

const StyledTeam = styled.div`
    display: flex;
    column-gap: 1.5rem;
    align-items: center;
    justify-content: center;
    min-width: 120px;

    .img-container { 
      width: 60px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
`

export default Team