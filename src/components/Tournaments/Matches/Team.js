import React from 'react'
import styled from 'styled-components';
import IconContainer from '../../Utils/IconContainer';
import { useContext } from 'react';
import { CurrentTournamentContext } from '../../../contexts/CurrentTournamentContext';

const Team = ({ team, side, fullName = false, imgSize }) => {
  const currentTournament = useContext(CurrentTournamentContext)
  const participants = currentTournament.details.participants
  const matchedTeam = participants.find(p => p._id === team._id)

  const teamIcon = require(`./../../../assets/${matchedTeam.logoSrc}`)

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

  const shownName = fullName ? matchedTeam.name : shortenName(matchedTeam.name)

  return (
    <StyledTeam imgSize={imgSize}>
      {side === 'left' && <p>{shownName}</p>}
      <IconContainer src={teamIcon} alt='team icon' size={imgSize} />
      {side === 'right' && <p>{shownName}</p>}
    </StyledTeam>
  )
}

const StyledTeam = styled.div`
  display: flex;
  column-gap: 1.5rem;
  align-items: center;
  justify-content: center;
  min-width: ${props => props.imgSize ? '' : '120px'}
`

export default Team