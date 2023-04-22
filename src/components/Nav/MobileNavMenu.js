import React from 'react'
import styled from 'styled-components';
import { navEntries } from './navEntries';

const MobileNavMenu = ({ setGameFilter, toggleMobileNav }) => {
  return (
    <StyledMobileNavMenu>
      <button onClick={toggleMobileNav}>Close</button>
      <div>
        {navEntries.map(entry => {
          return <button onClick={() => {
            setGameFilter(entry.gameType)
            toggleMobileNav()
          }} key={entry.name}>{entry.name}</button>
        })}
      </div>
    </StyledMobileNavMenu>
  )
}

const StyledMobileNavMenu = styled.section`
  position: absolute;
  background-color: #1f1f1f;
  z-index: 10;
  height: 100vh;
  width: 100%;
  font-size: 1.5rem;

  div {
    display: flex;
    flex-direction: column;

    button {
      font-weight: 500;
      margin: 0.5rem 1rem;
      padding: 0.5rem;

      &:hover {
        background-color: rgba(128,128,128,.2)
      }
    }
  }
`

export default MobileNavMenu