import React, { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { GlobalStyle } from './GlobalStyle';
import { theme } from './theme';
import Intro from './intro/Intro';
import Home from './home/Home';
import Burger from './navigation/Burger';
import Navigation from './navigation/Navigation';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Navigation open={isOpen} onOpen={setIsOpen} />
      {window.location.pathname != '/' && <Burger open={isOpen} onOpen={setIsOpen} />}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path='/' component={Intro} />
          <Route path='/home' component={Home} />
        </Switch>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
