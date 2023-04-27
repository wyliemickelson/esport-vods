import React from 'react'
import styled from 'styled-components';

const VodError = ({ vod }) => {

  return (
    <StyledError>
      <StyledErrorHeader>ERROR LOADING VOD</StyledErrorHeader>
      <p>
        {!vod && 'Vod does not exist. This is just a placeholder to prevent spoilers.'}
        {vod && !vod?.working && 'Vod is currently unavailable.'}
      </p>
    </StyledError>
  )
}

const StyledErrorHeader = styled.h3`
  color: #B73E3E;
  margin-bottom: 1rem;
`

const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  width: 90%;
  margin: 0 auto;
  margin-top: 2rem;
  border: 3px solid #B73E3E;

  font-weight: 500;
`

export default VodError