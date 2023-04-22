import React from 'react'
import styled from 'styled-components';
import IconContainer from '../../Utils/IconContainer';

const Team = ({ team, side }) => {

  const teamIcon = require(`./../../../assets/${team.logoSrc}`)

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
      {side === 'left' && <p>{shortenName(team.name)}</p>}
      <IconContainer src={teamIcon} alt='team icon' />
      {side === 'right' && <p>{shortenName(team.name)}</p>}
    </StyledTeam>
  )
}

const StyledTeam = styled.div`
  display: flex;
  column-gap: 1.5rem;
  align-items: center;
  justify-content: center;
  min-width: 120px;
`

export default Team