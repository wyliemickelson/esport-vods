import React from 'react'
import styled from 'styled-components';

const IconContainer = ({ src, alt }) => {
  return (
    <StyledIconContainer>
      <img src={src} alt={alt} />
    </StyledIconContainer>
  )
}

export default IconContainer

const StyledIconContainer = styled.div`
    width: 60px;
    min-width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
`