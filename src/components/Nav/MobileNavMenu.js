import React from 'react'
import styled from 'styled-components';
import { navEntries } from './navEntries';
import { Link } from 'react-router-dom';
import MobileNavHeader from './MobileNavHeader';

const MobileNavMenu = ({ toggleMobileNav }) => {
  return (
    <StyledMobileNavMenu>
      <MobileNavHeader toggleMobileNav={toggleMobileNav} />
      <div className='entries'>
        {navEntries.map(entry => {
          return <Link replace={true} onClick={toggleMobileNav} key={entry.name}
          to={`/${entry.gameType}`}>
            {entry.name}
            </Link>
        })}
      </div>
    </StyledMobileNavMenu>
  )
}

const StyledMobileNavMenu = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  background-color: #1f1f1f;
  z-index: 10;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  height: 100vh;
  width: 50%;
  font-size: 1.5rem;

  @media screen and (max-width: 700px) {
    width: 100%;
  }

  .entries {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;

    a {
      border-radius: 0.4rem;
      padding: 0.5rem 1rem;
      font-weight: 500;
      &:hover {
        background-color: rgba(128,128,128,.2)
      }
    }
  }
`

export default MobileNavMenu