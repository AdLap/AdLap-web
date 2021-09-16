import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Normalize } from 'styled-normalize';
import Intro from './intro/Intro';

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');

  font-family: 'Ubuntu', sans-serif;
  background: black;
`;

const App = () => {
  return (
    <Container>
      <Normalize />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Intro} />
        </Switch>
      </BrowserRouter>

    </Container>
  );
}

export default App;
