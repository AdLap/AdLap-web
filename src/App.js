import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components/macro';
import { Normalize } from 'styled-normalize';
import Intro from './intro/Intro';
import Home from './home/Home';
import { AnimatePresence } from 'framer-motion';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Ubuntu', sans-serif;
    background: black;
  }
`;

const App = () => {
  const location = useLocation();

  return (
    <>
      <Normalize />
      <GlobalStyle />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route exact path='/' component={Intro} />
            <Route path='/home' component={Home} />
          </Switch>
        </AnimatePresence>
    </>
  );
}

export default App;
