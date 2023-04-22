import React from 'react'
import styled from 'styled-components';
import { navEntries } from './navEntries';
import { useState } from 'react';
import BurgerIcon from './BurgerIcon';
import MobileNavMenu from './MobileNavMenu';

const NavBar = ({ setGameFilter, isMobile }) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen)

  return (
    <>
      {mobileNavOpen && <MobileNavMenu setGameFilter={setGameFilter} toggleMobileNav={toggleMobileNav} />}
      <StyledNavBar>
        {isMobile
          ? <BurgerIcon onClick={toggleMobileNav} />
          : navEntries.map(entry =>
            <StyledNavLink
              onClick={() => setGameFilter(entry.gameType)}
              key={entry.name}
            >
              {entry.name}
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

const StyledNavLink = styled.button`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1rem;
`

export default NavBar