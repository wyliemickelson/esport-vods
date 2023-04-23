import React from 'react'
import styled from 'styled-components';
import { navEntries } from './navEntries';
import { useState } from 'react';
import BurgerIcon from './BurgerIcon';
import MobileNavMenu from './MobileNavMenu';
import { Link } from 'react-router-dom';

const NavBar = ({ isMobile }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen)

  return (
    <>
      {mobileNavOpen && <MobileNavMenu toggleMobileNav={toggleMobileNav} />}
      <StyledNavBar>
        {isMobile
          ? <BurgerIcon onClick={toggleMobileNav} />
          : navEntries.map(entry =>
            <StyledNavLink
              key={entry.name}
            >
              <Link to={`${entry.gameType}`}>{entry.name}</Link>
            </StyledNavLink>
          )}
      </StyledNavBar>
    </>
  )
}

const StyledNavBar = styled.nav`
  display: flex;
  height: 61px;

  position: sticky;
  top: 0px;
  z-index: 5;
  background-color: var(--bg-color-dark);
`

export const StyledNavLink = styled.button`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1rem;
`

export default NavBar