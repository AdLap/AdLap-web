import React, { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { GlobalStyle } from './GlobalStyle';
import { theme } from './theme';
import Burger from './navigation/Burger';
import Navigation from './navigation/Navigation';
import Intro from './intro/Intro';
import Home from './home/Home';
import AboutMe from './about/AboutMe';
import Portfolio from './portfolio/Portfolio';
import Contact from './contact/Contact';
import Footer from './footer/Footer';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const body = document.querySelector('body');
  
  isOpen ? body.style.overflow = 'hidden' : body.style.overflow = 'unset';

  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Navigation open={isOpen} onOpen={setIsOpen} />
      {location.pathname !== '/' && <Burger open={isOpen} onOpen={setIsOpen} />}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path='/' component={Intro} />
          <Route path='/home' component={Home} />
          <Route path='/about' component={AboutMe} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
        </Switch>
        {location.pathname !== '/' && <Footer />}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
