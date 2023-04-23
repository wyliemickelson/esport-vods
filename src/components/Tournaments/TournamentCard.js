import React from 'react'
import styled from 'styled-components';
import IconContainer from '../Utils/IconContainer';

const TournamentCard = ({ tournament, onClick, isCurrent, extraStyles }) => {
  const img = require(`./../../assets/${tournament.details.mainImgSrc}`)

  return (
    <StyledTournamentCard onClick={onClick} isCurrent={isCurrent} extraStyles={extraStyles}>
      <IconContainer src={img} alt='event icon' />
      <p>{tournament.details.title}</p>
    </StyledTournamentCard>
  )
}

export default TournamentCard

const StyledTournamentCard = styled.button`
  border-bottom: 1px solid rgba(211, 211, 211, 0.1);
  box-sizing: border-box;
  width: 100%;
  display: flex;
  padding: 1rem;
  align-items: center;
  column-gap: 1rem;
  background-color: var(--bg-color-dark-alt);

  border-right: ${props => props.isCurrent ? '4px solid red' : ''};

  ${props => props.extraStyles}
`