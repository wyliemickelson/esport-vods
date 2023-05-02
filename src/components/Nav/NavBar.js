import React from 'react'
import styled from 'styled-components';
import { navEntries } from './navEntries';
import { useState } from 'react';
import BurgerIcon from './BurgerIcon';
import MobileNavMenu from './MobileNavMenu';
import { Link } from 'react-router-dom';
import useViewPort from '../Utils/useViewport';
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock';
import TournamentPlaceholder from '../Utils/TournamentPlaceholder';
import Logo from './Logo';
import { useParams } from 'react-router-dom';

const NavBar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const toggleMobileNav = () => {
    mobileNavOpen ? enableBodyScroll(document) : disableBodyScroll(document)
    setMobileNavOpen(!mobileNavOpen)
  }
  const { gameType } = useParams()
  const { width } = useViewPort()
  const isMobile = width < 1150

  return (
    <>
      {mobileNavOpen && <MobileNavMenu toggleMobileNav={toggleMobileNav} />}
      <StyledNavBar>
        <Logo />
        <div>
          {!isMobile && navEntries.map(entry =>
            <Link replace={true} to={`/${entry.gameType}`} key={entry.name}>
              <StyledNavLink>
                {entry.name}
              </StyledNavLink>
            </Link>
          )}
        </div>
        <div className='end'>
          <Link to={`/${gameType}`}>
            <TournamentPlaceholder nav />
          </Link>
          {isMobile && <BurgerIcon onClick={toggleMobileNav} />}
        </div>
      </StyledNavBar>
    </>
  )
}

const StyledNavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding-inline: min(4rem, 5%);

  position: sticky;
  top: -1px;
  z-index: 5;
  background-color: var(--bg-color-dark);

  .end {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 200px;
    column-gap: 1rem;
  }
`

export const StyledNavLink = styled.button`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1rem;
`

export default NavBar