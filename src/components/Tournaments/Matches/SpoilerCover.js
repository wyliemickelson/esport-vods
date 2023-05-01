import React from 'react'
import styled from 'styled-components';
import hideIcon from './../.././../assets/hide.svg'
import IconContainer from '../../Utils/IconContainer';

const SpoilerCover = ({ onClick }) => {
  return (
    <StyledSpoilerCover onClick={onClick}>
      <p>Possible Spoilers</p>
      <IconContainer src={hideIcon} size='35px' padding='0px' />
      <p>Click to Reveal</p>
    </StyledSpoilerCover>
  )
}

const StyledSpoilerCover = styled.div`
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  column-gap: 1rem;
  align-items: center;
  justify-content: center;
`

export default SpoilerCover