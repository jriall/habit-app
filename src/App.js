import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  height: 100%;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Title>This is my Habit App</Title>
      </Wrapper>
    );
  }
}

export default App;
