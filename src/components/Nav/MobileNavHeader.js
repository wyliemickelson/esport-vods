import React from 'react'
import BurgerIcon from './BurgerIcon'
import styled from 'styled-components';
import Logo from './Logo';

const MobileNavHeader = ({ toggleMobileNav }) => {
  return (
    <StyledNavHeader>
      <Logo />
      <BurgerIcon onClick={toggleMobileNav}/>
    </StyledNavHeader>
  )
}

const StyledNavHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10%;
  margin-bottom: 1rem;
  height: 80px;
  width: 100%;

  @media screen and (max-width: 700px) {
    padding-inline: 5%;
  }
`

export default MobileNavHeader