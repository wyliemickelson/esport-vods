import React from 'react'
import styled from 'styled-components';
import IconContainer from '../Utils/IconContainer';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const TournamentCard = ({ tournament, onClick, isCurrent}) => {

  const img = `/assets/${tournament?.details?.logoSrc}`
  const { gameType } = useParams()

  var specials = /[^A-Za-z 0-9]/g;
  const urlTitle = tournament.details.title.replaceAll(specials, '').replaceAll(' ', '-')

  return (
    <Link replace={true} to={`/${gameType}/${tournament._id}/${urlTitle}`}>
      <StyledTournamentCard onClick={onClick} isCurrent={isCurrent}>
        <IconContainer src={img} alt='event icon' size='60px' padding='0px' />
        <p>{tournament.details.title}</p>
      </StyledTournamentCard>
    </Link>
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

  border-right: ${props => props.isCurrent && `
    4px solid var(--color-acc-1)};
  `}
`