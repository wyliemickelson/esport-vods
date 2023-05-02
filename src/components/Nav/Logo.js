import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Logo = ({ onClick }) => {
  return (
    <Link to='/'>
    <StyledLogo onClick={onClick}>
      <img src='/assets/logos/logo-long.png' alt='logo icon' />
    </StyledLogo>
    </Link>
  )
}

const StyledLogo = styled.button`
    width: 150px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-sizing: content-box;

    img {
      max-width: 150px;
      max-height: 50px;
    }
`

export default Logo