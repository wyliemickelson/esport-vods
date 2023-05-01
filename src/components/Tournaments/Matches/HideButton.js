import React from 'react'
import styled from 'styled-components';
import IconContainer from '../../Utils/IconContainer';

const HideButton = ({ onClick, isMobile }) => {
  return (
    <StyledHideButton onClick={onClick} isMobile={isMobile}>
      <IconContainer src='/assets/hide.svg' size='25px' padding='0px' />
    </StyledHideButton>
  )
}

const StyledHideButton = styled.button`
  position: absolute;
  padding: 0.5rem;
  top: 0;
  left: 0;

  @media screen and (max-width: 500px) {
    position: static;
    padding-bottom: 1rem;
  }
`

export default HideButton