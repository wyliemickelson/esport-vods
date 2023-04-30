import React from 'react'
import styled from 'styled-components';
import useViewPort from './useViewport';

const IconContainer = ({ src, alt, size, flipped = false, padding }) => {
  const { width } = useViewPort()
  const mobile = width < 750
  const defaultSize = mobile ? '60px' : '100px'
  const defaultPadding = mobile ? '10px' : '30px';
  
  return (
    <StyledIconContainer size={size ? size : defaultSize} flipped={flipped} padding={padding ? padding : defaultPadding} mobile={mobile}>
      <img src={src} alt={alt} />
    </StyledIconContainer>
  )
}

export default IconContainer

const StyledIconContainer = styled.div`
    width: ${props => props.size};
    height: ${props => props.size};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${props => props.padding };

    img {
      max-width: calc(${props => props.size} - ${props => props.padding });
      max-height: calc(${props => props.size} - ${props => props.padding });
    }

    ${props => props.flipped && `
      transform: scaleX(-1);
    `}
`