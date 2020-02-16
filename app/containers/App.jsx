import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import theme from '../styles/theme';

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
