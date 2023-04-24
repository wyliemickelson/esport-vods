import React from 'react'
import burgerSVG from './../../assets/burger-menu.svg'
import styled from 'styled-components';

const BurgerIcon = ({ onClick }) => {
  return (
    <StyledBurgerIcon onClick={onClick}>
      <img src={burgerSVG} alt='burger menu icon' />
    </StyledBurgerIcon>
  )
}

const StyledBurgerIcon = styled.button`
    max-width: 50px;
    max-height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    padding: 0.5rem;
`

export default BurgerIcon