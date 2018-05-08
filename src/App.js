// @flow

import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './containers/Home';
import Profile from './containers/Profile';
import Insight from './containers/Insight';
import About from './containers/About';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  height: 100%;
`;

const App = () => (
  <Router>
    <Wrapper>
      <Navbar />
      <Title>This is my Habit App</Title>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/insight" component={Insight} />
      <Route path="/about" component={About} />
    </Wrapper>
  </Router>
);

export default App;
