import React from 'react';
import 'styled-components';
import logo from './logo.svg';
import styled, { keyframes } from 'styled-components';


// CRITICAL: Always use Styled Components outside the render method
const StyledApp = styled.div`
  text-align: center;
`

const StyledHeader = styled.div`
  background-color: ${props => props.timeOfTheDay === 'day' ? '#ac9a61' : '#282c34' };
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const StyledLink = styled.a`
  color: #61dafb;

  &:hover {
    color: #862b56;
  }
`

const rotateKeyFrames = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  // 1200px for testing...
  @media (min-width: 1200px) {
    animation: ${rotateKeyFrames} infinite 20s linear;
  }
`

function App() {
  return (
    <StyledApp>
      <StyledHeader timeOfTheDay="night" /* Testing styling props based */>
        <StyledLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <StyledLink

          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </StyledLink>
      </StyledHeader>
    </StyledApp>
  );
}

export default App;
