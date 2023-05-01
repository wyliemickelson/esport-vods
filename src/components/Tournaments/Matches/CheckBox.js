import React from 'react'
import styled from 'styled-components';

const CheckBox = ({ checked, onClick }) => {
  return (
    <StyledCheckBox onClick={onClick}>
      <div className="toggle-pill-dark">
        <input type="checkbox" readOnly checked={checked} />
        <label></label>
      </div>
    </StyledCheckBox>
  )
}

const StyledCheckBox = styled.div`
  padding: 0.5rem;

  .toggle-pill-dark input[type="checkbox"] {
    display: none;
  }
  .toggle-pill-dark input[type="checkbox"] + label {
    display: block;
    position: relative;
    width: 2em;
    height: 1em;
    border-radius: 1em;
    background: var(--bg-color-dark);
    box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-transition: background 0.1s ease-in-out;
    transition: background 0.1s ease-in-out;
  }
  .toggle-pill-dark input[type="checkbox"] + label:before {
    content: "";
    display: block;
    width: 0.6em;
    height: 0.6em;
    border-radius: 1em;
    background: #e84d4d;
    position: absolute;
    left: 0.2em;
    top: 0.2em;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }
  .toggle-pill-dark input[type="checkbox"]:checked + label:before {
    background: #47cf73;
    box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.2);
    left: 1.2em;
    -webkit-transform: rotate(295deg);
    transform: rotate(295deg);
  }
  /* toggle-pill-dark end */
`

export default CheckBox