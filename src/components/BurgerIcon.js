import React from 'react'
import styled from 'styled-components';

const BurgerIcon = ({ setMobileNavOpen }) => {
  const handleClick = () => {
    setMobileNavOpen(true)
  }
  return (
    <button onClick={handleClick} >BurgerIcon</button>
  )
}

export default BurgerIcon