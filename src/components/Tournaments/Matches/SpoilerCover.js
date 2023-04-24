import React from 'react'
import styled from 'styled-components';

const SpoilerCover = ({ onClick }) => {
  return (
    <StyledSpoilerCover onClick={onClick}>
      Possible Spoilers: Click to Reveal
    </StyledSpoilerCover>
  )
}

const StyledSpoilerCover = styled.div`
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default SpoilerCover