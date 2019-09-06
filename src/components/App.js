import React from "react";
import styled from "styled-components"
import Typist from "react-typist"

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const App = () => (
  <StyledWrapper>
    <Typist cursor={{ show: false }} avgTypingDelay={100}>
      <h1>hello world.</h1>
    </Typist>
  </StyledWrapper>
)

export default App;
