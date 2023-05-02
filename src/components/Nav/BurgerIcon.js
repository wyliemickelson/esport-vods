import React from 'react'
import styled from 'styled-components';

const BurgerIcon = ({ onClick }) => {
  return (
    <StyledBurgerIcon onClick={onClick}>
      <img src='/assets/icons/burger-menu.svg' alt='burger menu icon' />
    </StyledBurgerIcon>
  )
}

const StyledBurgerIcon = styled.button`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;

    img {
      max-width: 50px;
      max-height: 50px;
    }
`

export default BurgerIcon