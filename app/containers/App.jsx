import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faChevronUp, faAtom } from '@fortawesome/free-solid-svg-icons'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import theme from '../styles/theme';
import '../styles/scss/index.scss';

library.add(faBars, faChevronUp, faAtom);

const navigationList = [
  {
    label: 'Home',
    path: '/'
  }, {
    label: 'About',
    path: '/about-us'
  }, {
    label: 'Contact',
    path: '/contact'
  }
];

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Navigation navigationList={navigationList}/>
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
