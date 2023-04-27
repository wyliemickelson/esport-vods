import React from 'react'
import styled from 'styled-components';

const IconContainer = ({ src, alt, size, flipped }) => {
  return (
    <StyledIconContainer size={size} flipped={flipped}>
      <img src={src} alt={alt} />
    </StyledIconContainer>
  )
}

export default IconContainer

const StyledIconContainer = styled.div`
    width: ${props => props.size};
    min-width: ${props => props.size};
    height: ${props => props.size};
    display: flex;
    align-items: center;
    justify-content: center;

    ${props => props.flipped && `
      transform: scaleX(-1);
    `}
`

IconContainer.defaultProps = {
  size: '60px',
  flipped: false,
}